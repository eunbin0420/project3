// [데이터베이스 시뮬레이션] 학과 기준 데이터
const departmentDB = {
    bio: { name: "생명공학과 / 식품영양학과", subject: "science", job: "researcher", desc: "생명 현상을 탐구하고 식품 및 보건 기술을 연구합니다.", jobs: "바이오연구원, 식품위생사, 의약품개발자", prepare: "과학 실험 동아리 활동과 생명과학 독서 활동이 도움이 됩니다." },
    it: { name: "컴퓨터공학과 / 소프트웨어학과", subject: "math", job: "researcher", desc: "소프트웨어, AI, 로봇 및 데이터 분석의 핵심을 배웁니다.", jobs: "앱/웹 개발자, AI 연구원, 화이트해커", prepare: "간단한 블록코딩(엔트리 등)이나 텍스트 코딩 토이 프로젝트를 해보세요." },
    edu: { name: "교육학과 / 상담심리학과", subject: "korean", job: "teacher", desc: "사람의 심리를 이해하고 효과적인 교수 및 상담 방법을 배웁니다.", jobs: "중고등학교 교사, 청소년 상담사, 직업상담사", prepare: " 또래 상담부 활동이나 교육 봉사 활동을 추천합니다." },
    design: { name: "시각디자인과 / 미디어콘텐츠과", subject: "art", job: "creator", desc: "영상, 그래픽, 예술적 감각을 결합하여 메시지를 시각화합니다.", jobs: "영상 편집자, UI/UX 디자이너, 크리에이티브 디렉터", prepare: "나만의 포트폴리오(그림, 영상, PPT 제작물)를 꾸준히 모아두세요." }
};

function processAlgorithm() {
    // 1. 사용자 정보 입력값 가져오기
    const interest = document.getElementById('interest').value;
    const subject = document.getElementById('subject').value;
    const job = document.getElementById('job').value;
    const grade = document.getElementById('grade').value;

    if (!interest || !subject || !job || !grade) {
        alert("모든 입력란을 선택하셔야 알고리즘이 가동됩니다!");
        return;
    }

    // 2. [관심도 적합 점수 계산] 최대 60점
    let interestScore = 0;
    const targetDept = departmentDB[interest]; // 관심 분야 기준 학과 선택
    
    if (interest) interestScore += 20; // 관심사 일치 기본점수
    if (subject === targetDept.subject) interestScore += 20; // 좋아하는 과목 가산점
    if (job === targetDept.job) interestScore += 20; // 희망 직업군 가산점

    // 3. [성적 기준 점수 계산] 최대 40점
    let gradeScore = 0;
    if (grade === "A") gradeScore = 40;
    else if (grade === "B") gradeScore = 25;
    else if (grade === "D") gradeScore = 10;

    // 4. [종합 적합도 계산] (관심도 + 성적) 최대 100점
    const totalScore = interestScore + gradeScore;

    // 5. [학과 추천 등급 분류] (안정 / 적정 / 도전)
    let classification = "";
    if (totalScore >= 80) {
        classification = "✅ 안전 지원 학과 (합격 가능성 높음)";
    } else if (totalScore >= 50) {
        classification = "⚖️ 적정 지원 학과 (알맞은 도전)";
    } else {
        classification = "🔥 도전 지원 학과 (성적/관심도 보완 필요)";
    }

    // 6. [추천 결과 출력] 화면에 데이터 바인딩
    document.getElementById('interest-score').innerText = interestScore;
    document.getElementById('grade-score').innerText = gradeScore;
    document.getElementById('total-score').innerText = totalScore;

    document.getElementById('group-badge').innerText = classification;
    document.getElementById('dept-name').innerText = targetDept.name;
    document.getElementById('recommend-reason').innerText = targetDept.desc;
    document.getElementById('related-job').innerText = targetDept.jobs;
    document.getElementById('prepare-method').innerText = targetDept.prepare;

    // 화면 전환
    document.getElementById('input-section').style.display = "none";
    document.getElementById('result-section').style.display = "block";
}

// 7. [사용자 피드백 입력 및 반영]
function submitFeedback(status) {
    const msgBox = document.getElementById('feedback-msg');
    
    if (status === '만족') {
        msgBox.innerHTML = "🎉 피드백 감사합니다! 알고리즘이 안정적으로 작동 중입니다.";
        msgBox.style.color = "#10b981";
    } else if (status === '보통') {
        msgBox.innerHTML = "⚙️ 피드백 반영: 가산점 가중치를 미세 조정합니다.";
        msgBox.style.color = "#64748b";
    } else {
        // [추천 기준 수정 및 개선 단계 시뮬레이션]
        msgBox.innerHTML = "🛠️ 시스템 업데이트: 불만족 데이터를 분석하여 다음 추천 기준을 개선합니다.";
        msgBox.style.color = "#ef4444";
    }
}

// 초기화 함수
function resetForm() {
    document.getElementById('interest').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('job').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('feedback-msg').innerText = "";
    
    document.getElementById('input-section').style.display = "block";
    document.getElementById('result-section').style.display = "none";
}