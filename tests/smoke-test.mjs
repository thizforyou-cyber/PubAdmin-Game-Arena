import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const html = read("../index.html");
const questionSource = read("../questions.js");
const learningSource = read("../learning.js");
const serviceWorker = read("../service-worker.js");
const manifestSource = read("../manifest.json");

const questionContext = { window: {} };
vm.runInNewContext(questionSource, questionContext, { filename: "questions.js" });
const questions = questionContext.window.QBANK;
assert.ok(Array.isArray(questions), "questions.js must expose window.QBANK");
assert.ok(questions.length >= 90, "The original 90-question bank (Q51-Q140) must remain present");

const numbers = questions.map((item) => item.n);
assert.equal(new Set(numbers).size, numbers.length, "Question numbers must be unique");
for (const n of Array.from({ length: 90 }, (_, i) => i + 51)) {
  assert.ok(numbers.includes(n), `Original question Q${n} is missing`);
}
for (const item of questions) {
  assert.ok(Number.isInteger(item.n), `Question number must be an integer: ${item.n}`);
  assert.ok(typeof item.q === "string" && item.q.trim(), `Q${item.n} needs question text`);
  assert.ok(Array.isArray(item.o) && item.o.length >= 2, `Q${item.n} needs answer options`);
  assert.ok(Number.isInteger(item.a) && item.a >= 0 && item.a < item.o.length, `Q${item.n} has an invalid answer index`);
  assert.ok(item.o.every((option) => typeof option === "string" && option.trim()), `Q${item.n} has an empty option`);
}

const learningContext = { window: { QBANK: questions } };
vm.runInNewContext(learningSource, learningContext, { filename: "learning.js" });
const notes = learningContext.window.LEARNING_NOTES ?? {};
for (const key of Object.keys(notes)) {
  assert.ok(numbers.includes(Number(key)), `Learning note ${key} has no matching question`);
}

for (const [key, note] of Object.entries(notes)) {
  const question = questions.find((item) => item.n === Number(key));
  if (question && !question.topic) question.topic = note.topic;
}
assert.ok(questions.every((item) => typeof item.topic === "string" && item.topic.trim()), "Every question should be available for topic practice");

const inlineScripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
  .filter((match) => !/\bsrc=/.test(match[1]))
  .map((match) => match[2]);
assert.ok(inlineScripts.length > 0, "index.html should contain the app script");
for (const [index, script] of inlineScripts.entries()) {
  assert.doesNotThrow(() => new Function(script), `Inline script ${index + 1} must parse`);
}
assert.doesNotThrow(() => new Function(questionSource), "questions.js must parse");
assert.doesNotThrow(() => new Function(learningSource), "learning.js must parse");
assert.doesNotThrow(() => new Function(serviceWorker), "service-worker.js must parse");
assert.doesNotThrow(() => JSON.parse(manifestSource), "manifest.json must be valid JSON");

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "Static HTML element IDs must be unique");
for (const asset of ["questions.js", "learning.js", "manifest.json", "service-worker.js", "icon.svg"]) {
  assert.ok(html.includes(asset), `index.html should reference ${asset}`);
  if (asset !== "service-worker.js") assert.ok(serviceWorker.includes(asset), `Offline cache should include ${asset}`);
}

console.log(`PabAce checks passed: ${questions.length} questions, ${Object.keys(notes).length} learning notes, scripts and PWA files validated.`);
