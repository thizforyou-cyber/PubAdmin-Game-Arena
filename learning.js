/* Curated learning notes and verified supplementary questions.
   Original QBANK items and answer keys are intentionally left unchanged. */
window.LEARNING_NOTES = {
  81: {
    topic: "Indian Constitution & Local Government",
    why: "Article 243D deals with reservation of seats in Panchayats; Article 243K concerns State Election Commissions; Article 243W concerns municipal powers; Article 243ZE provides for Metropolitan Planning Committees.",
    memory: "D = seats (reservation); K = election; W = municipal work; ZE = metropolitan planning.",
    exam: "These provisions are in Parts IX and IX-A of the Constitution, introduced through the 73rd and 74th Constitutional Amendments.",
    source: "https://www.legislative.gov.in/static/uploads/2025/07/359f70a69695affb9d72f8393102bd2e.pdf"
  },
  51: {
    topic: "Administrative Thinkers & Books",
    why: "The supplied answer key matches General and Industrial Management with Henri Fayol; Papers on the Science of Administration with Gulick and Urwick; The Science of Administration: Three Problems with Robert Dahl; and Reflections on Public Administration with John M. Gaus.",
    memory: "Fayol = General/Industrial Management; Gulick & Urwick = Papers on Administration; Dahl = three problems; Gaus = reflections.",
    exam: "For matching questions, revise book titles and authors together and watch for similar titles about the science of administration.",
    source: "https://archive.org/search?query=General+and+Industrial+Management+Henri+Fayol"
  },
  62: {
    topic: "Local Government",
    why: "In the conventional matching used in this question: a Village Panchayat is associated with a Sarpanch; a Panchayat Samiti with a Block Development Officer; a Municipal Council with a President; and a Municipal Corporation with a Mayor.",
    memory: "Village—Sarpanch; Block—BDO; Council—President; Corporation—Mayor.",
    exam: "Titles and exact arrangements may vary under state laws, so distinguish the common exam convention from each state's statutory rules.",
    source: "https://www.legislative.gov.in/static/uploads/2025/07/359f70a69695affb9d72f8393102bd2e.pdf"
  },
  82: {
    topic: "Research Methods",
    why: "A variable is a characteristic assigned a value; a hypothesis is a tentative statement about relationships between variables; a theory is a connected set of concepts and propositions; and scientific research is a systematic, controlled, empirical and critical investigation.",
    memory: "Variable = value; Hypothesis = proposed relationship; Theory = connected explanation; Research = systematic investigation.",
    exam: "Research-methods matching questions often test definitions rather than examples. Identify the defining phrase before selecting a match.",
    source: "https://www.ugcnetonline.in/syllabus-new.php"
  },
  53: {
    topic: "Union Government & Secretariat",
    why: "The Cabinet Secretariat supports the Cabinet and Cabinet committees and helps coordinate government business. Its precise organisation and rules should be studied from official Government of India material; the original question and key have been retained as supplied.",
    memory: "Cabinet Secretariat = coordination and support for Cabinet business.",
    exam: "Do not confuse the Cabinet Secretariat with the Prime Minister's Office or a state Chief Secretary's office.",
    source: "https://cabsec.gov.in/"
  },
  59: {
    topic: "Administrative Thought",
    why: "The correct answer is Dwight Waldo. This question attributes the view that public administration as a field and practice dates back to the earliest times of human civilisation to Waldo.",
    memory: "Q59: earliest origins of public administration → Dwight Waldo. Do not confuse this quote with Gulick's POSDCORB.",
    exam: "Choose option C (the third option): Dwight Waldo.",
    source: "https://testbook.com/question-answer/who-of-the-following-thinkers-define-public-admin--6a84148d1f0d7a4b63d21aa6/amp"
  }
};


/* Keep only the user's original questions Q.51–Q.140.
   These ten Topic Sprints follow the official UGC-NET Public Administration syllabus units.
   Topics are study groupings; each original question and answer index stays unchanged. */
window.QBANK = window.QBANK.filter(q => q.n >= 51 && q.n <= 140);
window.SYLLABUS_TOPICS = [
  "Introduction to Public Administration",
  "Administrative Thought",
  "Indian Administration",
  "State and Local Administration",
  "Comparative and Development Administration",
  "Economic and Financial Administration",
  "Social Welfare Administration",
  "Public Policy",
  "Governance and Good Governance",
  "Research Methodology"
];
function assignSyllabusTopic(q) {
  const s = (q.q + " " + (q.o || []).join(" ")).toLowerCase();
  const has = re => re.test(s);
  if (has(/hypothes|sample|sampling|research|variable|data collection|data preparation|questionnaire|report writing|research report|interviews method|literature review|scientific research|kerlinger|kothari/)) return "Research Methodology";
  if (has(/social welfare|social security|social service|social work|welfare board|scholarship|yasasvi|scheduled caste|scheduled tribe|backward class|minorities|women|safai karmachari|human rights|disaster management|disaster|one stop centre|tele.?manas|e-sanjeevani|senior citizens|sustainable development/)) return "Social Welfare Administration";
  if (has(/budget|contingency fund|finance bill|appropriation bill|demands for grants|financial control|public account committee|estimates committee|public undertakings|tax|taxation|finance commission|cag|comptroller|auditor|target base budget|financial management|union government exclusively/)) return "Economic and Financial Administration";
  if (has(/comparative|ecology of public administration|fused|prismatic|diffracted|agraria|industria|transitia|sala model|national personnel authority|french civil service|independent regulatory commissions|development administration|riggs|ferrel heady|guy peters|george f. gant/)) return "Comparative and Development Administration";
  if (has(/panchayat|municipal|local governance|local government|decentralisation|decentralization|urbanization|urban administration|district disaster|district administration|gram sabha|sarpanch|block development|mayor|governor|chief minister|chief secretary|state administration|article 243|article 309|article 130|industrial policy|rural- urban|rural urban|local finance|urbanization|commission on urbanization/)) return "State and Local Administration";
  if (has(/citizen.?s charter|citizen charter|accountability|whistle|lokayukta|vigilance|administrative reforms|second administrative reforms|first administrative reforms|arc report|e-governance|digital india|information technology act|right to information|civil society|public choice|governance|good government|better government|digital-era|digital era|saptanga|kautilya|article 32|article 246|article 143|article 148|article 149|article 150|article 151|public law|regulatory commissions|commission.*women|commission.*minorities|commission.*backward|commission.*safai|commission.*human rights|niti aayog|policy experts|whistle blowers|policy-making|policy making|influence policy/)) return "Governance and Good Governance";
  if (has(/policy|incrementalism|top-down|bottom-up|normative-optimal|evaluation|david easton|inputs|outputs|feedback|decision making process|decision-making|quade|policy-action|policy making|policy makers|policy-making|public policy|non-official|interest group|pressure group/)) return "Public Policy";
  if (has(/mary parker follett|maslow|argyris|drucker|fayol|gulick|urwick|robert dahl|john m. gaus|scientific management|administrative behaviour|administrative behavior|human side of enterprise|functions of the executive|motivation|job enrichment|linking pin|herzberg|mcgregor|weber|new public administration|intellectual crisis|administrative theories and politics|policy and administration|administrative thought|books|authors|thinker|thinkers|management by objectives|civil service neutrality|politics-administration dichotomy/)) return "Administrative Thought";
  if (has(/cabinet secretariat|union public service commission|upsc|civil services|civil service|niti aayog|national informatics centre|national e-governance plan|nic|parliament|constitution|constitutional|article 340|article 341|article 335|article 312|police commission|police reform|macaulay|constituent assembly|commission.*establishment|commission.*chronological|institution of secretariat|staff college|administrative staff college|national academy of administration|lokpal|cvc|indian administration|indian institute of public administration|secretariat training/)) return "Indian Administration";
  return "Introduction to Public Administration";
}
window.QBANK.forEach(q => {
  q.topic = assignSyllabusTopic(q);
  if (window.LEARNING_NOTES[q.n]) window.LEARNING_NOTES[q.n].topic = q.topic;
});
