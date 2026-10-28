# PabAce 🎮

A playful, mobile-friendly UGC NET Public Administration study game built with plain HTML, CSS and JavaScript.

## Learning and game modes
- 90 original supplied questions (Q.51–Q.140), with the original answer key preserved
- 20 additional practice questions (Q.141–Q.160) on constitutional provisions, RTI, local government, public audit and Administrative Reforms Commission reports
- Chill Practice, Daily Challenge (10 repeatable questions that refresh by local calendar day), Speed Blitz (10 questions), Boss Battle (20 questions), and Admin Adventure
- Topic Sprints for focused practice
- Memory Lab flashcards with answer reveal, learning notes and source links
- Mistake Vault: incorrect answers are saved automatically; cards can also be saved manually for later revision
- Learning cards with simple explanations, memory hooks, exam connections and source links where notes are available
- XP, streaks, hints, answer feedback and end-of-round review
- Responsive layout for desktop and mobile

## Source and answer-key policy
The original question bank is kept in `questions.js` and has not been rewritten by the supplementary-question update. New questions and learning notes are in `learning.js`. Supplementary factual items link to official constitutional, government or statutory sources where available. Original answer keys are reproduced as supplied and should be reviewed separately if a possible source error is found.

## Publish with GitHub Pages
1. Open this repository on GitHub.
2. Select **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**, then click **Save**.
5. Wait for deployment, then open:
   https://thizforyou-cyber.github.io/PubAdmin-Game-Arena/

## Progress and revision
- Study HQ dashboard shows accuracy from recorded attempts, distinct questions attempted, saved questions due for review, and the lowest-accuracy topics from your own activity.
- Incorrect answers are added to the revision list; review attempts that are answered correctly are removed from it.
- A lightweight spaced-review schedule suggests 1, 3, 7 and 14-day intervals after consecutive correct answers; wrong answers become due immediately.
- Export your study history and revision metadata as a JSON file for backup.
- Progress is stored in the current browser using local storage; it does not automatically sync across browsers or devices. Existing progress from before this update is not retroactively included in topic accuracy.

## Files
- `index.html` — interface, layout, game modes and learning tools
- `questions.js` — original supplied question bank
- `learning.js` — learning notes and 20 supplementary questions with references
- `.nojekyll` — GitHub Pages configuration

No installation or build step is required.