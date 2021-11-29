function getTeacherData() {
  const lessonCountSelector = "#teacher_profile_nav_aboutme > div.teacherCard > div.teacherCard-body > div.teacherCard-part1 > div.teacherCard-right > div.teacherCard-right-body > div:nth-child(2) > span";
  const studentCountSelector = "#teacher_profile_nav_aboutme > div.teacherCard > div.teacherCard-body > div.teacherCard-part1 > div.teacherCard-right > div.teacherCard-right-body > div:nth-child(3) > span";

  return {
    lessonCount: document.querySelector(lessonCountSelector).textContent,
    studentCount: document.querySelector(studentCountSelector).textContent
  }
};

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript(
    {
    target: { tabId: tab.id },
    func: getTeacherData
    },
  (injectionResults) => {
    for (const frameResult of injectionResults)
      console.log('Teacher Data: ' + frameResult.result.lessonCount + ' ' + frameResult.result.studentCount);
  });
});
