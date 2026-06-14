const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");
const languageToggle = document.querySelector("[data-lang-toggle]");
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  zh: {
    pageTitle: "Sean Zhang | 风险、数据与业务分析",
    metaDescription: "Sean Zhang 的个人网站，展示风险分析、数据分析、业务分析、Excel VBA 自动化项目和简历。",
    skipLink: "跳到主要内容",
    brandAria: "Sean Zhang 首页",
    mainNavAria: "主导航",
    navAbout: "关于",
    navExperience: "经历",
    navResume: "简历",
    navProjects: "项目",
    navSkills: "技能",
    navEducation: "教育",
    navContact: "联系",
    languageToggle: "EN",
    languageToggleAria: "切换到英文",
    menuToggle: "打开导航",
    heroAria: "个人介绍",
    heroEyebrow: "数据分析、风险管理、业务分析",
    heroSummary:
      "University of Waterloo Financial Analysis and Risk Management 学生，具备银行运营、Excel VBA 自动化、Power BI、Python、SQL、信用风险分析和业务流程改进经验。",
    heroActionsAria: "主要操作",
    heroProjectsButton: "查看项目",
    heroResumeButton: "下载简历",
    heroLinkedinButton: "LinkedIn",
    heroFactsAria: "个人概览",
    factFocusLabel: "Client communications",
    factFocusValue: "300+ 次 GIC 客户沟通",
    factEducationLabel: "Applications",
    factEducationValue: "100+ 份银行申请处理",
    factToolsLabel: "Automation",
    factToolsValue: "VBA 每周节省 2–4 小时",
    factCreditLabel: "Credit analytics",
    factCreditValue: "分析 1,000 名信用申请人",
    introAria: "简介",
    profileEyebrow: "关于",
    profileTitle: "结合银行经验与分析自动化",
    profileBody:
      "我正在 University of Waterloo 攻读 Bachelor of Mathematics in Financial Analysis and Risk Management，并辅修 Computing，带有 co-op 安排。",
    profileBody2:
      "在两段 BMO Private Banking Services 实习中，我支持 GIC 和跨境银行流程，开发 Excel VBA 自动化，并提升报告准确性和流程效率。我的项目包括 Python 与 scikit-learn 信用风险建模、Power BI 仪表盘和 Excel 贷款组合分析。",
    resumeEyebrow: "Experience",
    resumeTitle: "经历概览",
    experienceEyebrow: "Experience",
    experienceHeading: "经历",
    resumeBody:
      "BMO Private Banking Services 的银行运营、报告和自动化经历。",
    resumeDownload: "下载完整 PDF 简历",
    experienceTitle: "Experience",
    bmoGicDate: "Sep 2025 – Dec 2025",
    bmoGicCompany: "Bank of Montreal — Private Banking Services",
    bmoGicTitle: "GIC Intern",
    bmoGicMeta: "Beijing, China",
    bmoGicBody:
      "生成并校验每日 GIC 申请报告，支持 100+ 份申请和 300+ 次客户沟通。",
    bmoGicBullet1:
      "使用连接主 CSV 文件的 Excel 模板生成并校验每日 GIC 申请报告。",
    bmoGicBullet2:
      "处理 100+ 份申请，并完成 300+ 次关于文件、开户和后续跟进的客户沟通。",
    bmoPbsDate: "Apr 2025 – Aug 2025",
    bmoPbsCompany: "Bank of Montreal — Private Banking Services",
    bmoPbsTitle: "PBS Intern",
    bmoPbsMeta: "Beijing, China",
    bmoPbsBody:
      "开发 Excel VBA 工具并支持 100+ 名跨境客户完成 BMO Asian Referral Program。",
    bmoPbsBullet1:
      "开发 Excel VBA 工具导入 CSV 数据、自动填写服务表格并生成客户邮件，每周节省 2–4 小时。",
    bmoPbsBullet2:
      "引导 100+ 名跨境客户完成 BMO Asian Referral Program，包括开户和 KYC 文件准备。",
    educationTitle: "Education",
    educationEyebrow: "教育",
    educationHeading: "University of Waterloo",
    waterlooDate: "Sep 2023 – May 2028",
    waterlooSchool: "University of Waterloo",
    waterlooTitle: "Bachelor of Mathematics in Financial Analysis and Risk Management",
    waterlooMeta: "Computing Minor · Co-op | Sep 2023 – May 2028",
    waterlooBody:
      "学习重点包括金融分析、风险管理、统计、编程、数据分析和面向业务决策的量化工具。",
    projectsEyebrow: "Projects",
    projectsTitle: "项目作品",
    projectsBody:
      "这里展示最能代表我 data analytics、risk management 和 business analysis 方向的三个项目。",
    projectFiltersAria: "项目筛选",
    filterAll: "全部",
    filterRisk: "Credit Risk",
    filterExcel: "Excel",
    creditProjectType: "信用风险 · 数据分析",
    creditProjectTitle: "Credit Risk Analytics Dashboard and Classification Project",
    creditProjectBody:
      "使用 Python 分析 1,000 名信用申请人，并通过 recall、ROC-AUC 和 cost-sensitive evaluation 对比 Logistic Regression 与 Random Forest 模型。搭建 Power BI 仪表盘追踪违约率、贷款敞口和风险分层。",
    creditProjectBullet1:
      "分析 1,000 名德国信用申请人，识别贷款金额、期限、账户状态、储蓄水平和信用历史中的违约风险模式。",
    creditProjectBullet2:
      "搭建 Power BI 仪表盘，通过 KPI 卡片、切片器和风险分层图表监控违约率、贷款敞口和申请人风险画像。",
    creditProjectBullet3:
      "使用 recall、ROC-AUC 和 cost-sensitive evaluation 对比 Logistic Regression 与 Random Forest，并选择 Logistic Regression 以更强地识别高风险申请人。",
    techStackAria: "技术栈",
    projectGithubLink: "GitHub",
    projectDashboardLink: "查看仪表盘",
    projectResumeLink: "查看项目",
    loanProjectType: "贷款组合 · Excel 仪表盘",
    loanProjectTitle: "Loan Portfolio Risk and Profitability Dashboard",
    loanProjectBody:
      "搭建交互式 Excel 仪表盘，分析 614 份贷款申请的审批率、风险等级、预期损失、利息收入和净盈利能力。",
    loanProjectBullet1:
      "使用 PivotTables、Pivot Charts、切片器和高级公式搭建交互式 Excel 仪表盘，分析 614 份贷款申请。",
    loanProjectBullet2:
      "基于信用历史和 debt-to-income ratio 设计风险分层逻辑，将申请人划分为低、中、高风险。",
    loanProjectBullet3:
      "计算利息收入、预期损失和净盈利能力，用于支持贷款组合风险分析和放贷决策。",
    loanProjectLink: "查看项目",
    excelProjectType: "Excel VBA · 流程自动化",
    excelProjectTitle: "Excel VBA Banking Workflow Automation",
    excelProjectBody:
      "开发 Excel VBA 工具，从 CSV 导入客户数据，自动填写服务表格并生成个性化客户邮件，每周节省约 2–4 小时手动工作，同时提升处理准确性。",
    excelProjectBullet1:
      "开发 Excel VBA 工具，从 CSV 文件导入客户数据，自动填写服务表格并生成个性化邮件。",
    excelProjectBullet2:
      "每周减少约 2–4 小时重复手动录入工作，同时提升流程一致性。",
    vbaProjectLink: "查看项目",
    projectDisclaimer:
      "公开说明不包含任何保密客户数据、银行内部表格、专有模板或含有保密信息的截图。",
    skillsEyebrow: "Skills",
    skillsTitle: "技能方向",
    skillsBody:
      "技能内容已与最终简历方向对齐，聚焦 data analytics、risk management、business analysis 和核心工具。",
    skillProgrammingTitle: "Programming",
    skillProgrammingBody: "Python, SQL, VBA, R",
    skillAnalyticsTitle: "Data & Business Intelligence",
    skillAnalyticsBody: "Excel, Power BI, pandas, scikit-learn, data validation, dashboarding",
    skillExcelTitle: "Excel & Automation",
    skillExcelBody: "PivotTables, advanced formulas, CSV workflows, report automation, VBA",
    skillRiskTitle: "Risk & Business Analysis",
    skillRiskBody: "Credit risk, portfolio analysis, expected loss, process improvement, KYC documentation",
    skillToolsTitle: "Tools",
    skillToolsBody: "Git, VS Code, Linux, LaTeX",
    contactEyebrow: "Contact",
    contactTitle: "欢迎联系",
    contactBody:
      "我正在寻找 Fall 2026 co-op 机会，方向包括 risk analytics、business analysis、data analytics、PMO、finance 和 process improvement。",
    contactEmailButton: "发送邮件",
    contactLinkedinButton: "LinkedIn",
    contactGithubButton: "GitHub",
    contactResumeButton: "下载简历",
    contactCopyButton: "复制邮箱",
    copySuccess: "邮箱已复制",
    footerText: "© 2026 Sean Zhang. Risk analytics, data analytics, business analysis, and automation.",
    footerTop: "回到顶部",
  },
  en: {
    pageTitle: "Sean Zhang | Risk, Data & Business Analytics",
    metaDescription:
      "University of Waterloo Financial Analysis and Risk Management student with banking operations, Excel VBA automation, Power BI, Python, SQL, credit risk analytics, and business process improvement work.",
    skipLink: "Skip to main content",
    brandAria: "Sean Zhang home",
    mainNavAria: "Primary navigation",
    navAbout: "About",
    navExperience: "Experience",
    navResume: "Resume",
    navProjects: "Projects",
    navSkills: "Skills",
    navEducation: "Education",
    navContact: "Contact",
    languageToggle: "中文",
    languageToggleAria: "Switch to Chinese",
    menuToggle: "Open navigation",
    heroAria: "Personal introduction",
    heroEyebrow: "Data Analytics, Risk Management, Business Analysis",
    heroSummary:
      "University of Waterloo Financial Analysis and Risk Management student with hands-on experience in banking operations, Excel VBA automation, Power BI, Python, SQL, credit risk analytics, and business process improvement.",
    heroActionsAria: "Primary actions",
    heroProjectsButton: "View Projects",
    heroResumeButton: "Download Resume",
    heroLinkedinButton: "LinkedIn",
    heroFactsAria: "Personal overview",
    factFocusLabel: "Client communications",
    factFocusValue: "300+ handled across GIC workflows",
    factEducationLabel: "Applications",
    factEducationValue: "100+ banking applications processed",
    factToolsLabel: "Automation",
    factToolsValue: "2–4 hours/week saved through VBA",
    factCreditLabel: "Credit analytics",
    factCreditValue: "1,000 credit applicants analyzed",
    introAria: "About Sean Zhang",
    profileEyebrow: "About",
    profileTitle: "Combining banking experience with analytics and automation",
    profileBody:
      "I am pursuing a Bachelor of Mathematics in Financial Analysis and Risk Management at the University of Waterloo with a Computing Minor and co-op sequence.",
    profileBody2:
      "During two internships with BMO Private Banking Services, I supported GIC and cross-border banking workflows, built Excel VBA automation, and helped improve reporting accuracy and process efficiency. My project work includes credit risk modelling with Python and scikit-learn, Power BI dashboarding, and Excel-based loan portfolio analysis.",
    resumeEyebrow: "Experience",
    resumeTitle: "Experience Snapshot",
    experienceEyebrow: "Experience",
    experienceHeading: "Experience",
    resumeBody:
      "Banking operations, reporting, and automation at BMO Private Banking Services.",
    resumeDownload: "Download full PDF resume",
    experienceTitle: "Experience",
    bmoGicDate: "Sep 2025 – Dec 2025",
    bmoGicCompany: "Bank of Montreal — Private Banking Services",
    bmoGicTitle: "GIC Intern",
    bmoGicMeta: "Beijing, China",
    bmoGicBody:
      "Generated and validated daily GIC reports while supporting 100+ applications and 300+ client communications.",
    bmoGicBullet1:
      "Generated and validated daily GIC application reports using Excel templates linked to master CSV files.",
    bmoGicBullet2:
      "Processed 100+ applications and handled 300+ client communications on documentation, account-opening, and follow-ups.",
    bmoPbsDate: "Apr 2025 – Aug 2025",
    bmoPbsCompany: "Bank of Montreal — Private Banking Services",
    bmoPbsTitle: "PBS Intern",
    bmoPbsMeta: "Beijing, China",
    bmoPbsBody:
      "Built an Excel VBA workflow and guided 100+ cross-border clients through BMO's Asian Referral Program.",
    bmoPbsBullet1:
      "Built an Excel VBA tool to import CSV data, auto-fill service forms, and generate client emails, saving 2–4 hours per week.",
    bmoPbsBullet2:
      "Guided 100+ cross-border clients through BMO's Asian Referral Program, including account-opening and KYC documentation.",
    educationTitle: "Education",
    educationEyebrow: "Education",
    educationHeading: "University of Waterloo",
    waterlooDate: "Sep 2023 – May 2028",
    waterlooSchool: "University of Waterloo",
    waterlooTitle: "Bachelor of Mathematics in Financial Analysis and Risk Management",
    waterlooMeta: "Computing Minor · Co-op | Sep 2023 – May 2028",
    waterlooBody:
      "Academic focus: financial analysis, risk management, statistics, programming, data analytics, and quantitative tools for business decisions.",
    projectsEyebrow: "Projects",
    projectsTitle: "Selected Projects",
    projectsBody:
      "These three projects best represent my focus in data analytics, risk management, and business analysis.",
    projectFiltersAria: "Project filters",
    filterAll: "All",
    filterRisk: "Credit Risk",
    filterExcel: "Excel",
    creditProjectType: "Credit Risk · Data Analytics",
    creditProjectTitle: "Credit Risk Analytics Dashboard and Classification Project",
    creditProjectBody:
      "Analyzed 1,000 credit applicants using Python and compared Logistic Regression and Random Forest models using recall, ROC-AUC, and cost-sensitive evaluation. Built a Power BI dashboard to monitor default rates, loan exposure, and risk segments.",
    creditProjectBullet1:
      "Analyzed 1,000 German credit applicants to identify default-risk patterns across loan amount, duration, account status, savings level, and credit history.",
    creditProjectBullet2:
      "Built a Power BI dashboard with KPI cards, slicers, and risk segmentation visuals to monitor default rate, loan exposure, and applicant risk profiles.",
    creditProjectBullet3:
      "Compared Logistic Regression and Random Forest models using recall, ROC-AUC, and cost-sensitive evaluation, selecting Logistic Regression for stronger high-risk applicant identification.",
    techStackAria: "Technology stack",
    projectGithubLink: "GitHub",
    projectDashboardLink: "View Dashboard",
    loanProjectType: "Loan Portfolio · Excel Dashboard",
    loanProjectTitle: "Loan Portfolio Risk and Profitability Dashboard",
    loanProjectBody:
      "Built an interactive Excel dashboard to analyze 614 loan applications by approval rate, risk tier, expected loss, interest revenue, and net profitability.",
    loanProjectBullet1:
      "Built an interactive Excel dashboard using PivotTables, Pivot Charts, slicers, and advanced formulas to analyze 614 loan applications.",
    loanProjectBullet2:
      "Developed risk-tier logic using credit history and debt-to-income ratio to classify applicants into low, medium, and high-risk segments.",
    loanProjectBullet3:
      "Calculated interest revenue, expected loss, and net profitability to support portfolio risk analysis and lending decisions.",
    loanProjectLink: "View Project",
    excelProjectType: "Excel VBA · Process Automation",
    excelProjectTitle: "Excel VBA Banking Workflow Automation",
    excelProjectBody:
      "Built an Excel VBA tool to import client data from CSV files, populate service forms, and generate personalized emails, saving approximately 2–4 hours of manual work per week.",
    excelProjectBullet1:
      "Built an Excel VBA tool to import client data from CSV files, populate service forms, and generate personalized emails.",
    excelProjectBullet2:
      "Reduced repetitive manual data entry by approximately 2–4 hours per week while improving workflow consistency.",
    vbaProjectLink: "View Project",
    projectDisclaimer:
      "Public descriptions contain no confidential client data, internal banking forms, proprietary templates, or screenshots containing confidential information.",
    skillsEyebrow: "Skills",
    skillsTitle: "Skill Areas",
    skillsBody:
      "Technical and business skills applied across banking operations, risk analysis, reporting, automation, and dashboard development.",
    skillProgrammingTitle: "Programming",
    skillProgrammingBody: "Python, SQL, VBA, R",
    skillAnalyticsTitle: "Data & Business Intelligence",
    skillAnalyticsBody: "Excel, Power BI, pandas, scikit-learn, data validation, dashboarding",
    skillExcelTitle: "Excel & Automation",
    skillExcelBody: "PivotTables, advanced formulas, CSV workflows, report automation, VBA",
    skillRiskTitle: "Risk & Business Analysis",
    skillRiskBody: "Credit risk, portfolio analysis, expected loss, process improvement, KYC documentation",
    skillToolsTitle: "Tools",
    skillToolsBody: "Git, VS Code, Linux, LaTeX",
    contactEyebrow: "Contact",
    contactTitle: "Let's connect",
    contactBody:
      "I am currently seeking Fall 2026 co-op opportunities in risk analytics, business analysis, data analytics, PMO, finance, and process improvement.",
    contactEmailButton: "Email Me",
    contactLinkedinButton: "LinkedIn",
    contactGithubButton: "GitHub",
    contactResumeButton: "Download Resume",
    contactCopyButton: "Copy Email",
    copySuccess: "Email copied",
    footerText: "© 2026 Sean Zhang. Risk analytics, data analytics, business analysis, and automation.",
    footerTop: "Back to top",
  },
};

const savedLanguage = localStorage.getItem("preferredLanguage");
let currentLanguage = savedLanguage === "zh" || savedLanguage === "en" ? savedLanguage : "en";

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const setLanguage = (language) => {
  const dictionary = translations[language];
  currentLanguage = language;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.pageTitle;
  metaDescription?.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;

    if (key && dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  if (copyStatus?.textContent) {
    copyStatus.textContent = "";
  }

  localStorage.setItem("preferredLanguage", language);
};

setHeaderState();
setLanguage(currentLanguage);

window.addEventListener("scroll", setHeaderState, { passive: true });

languageToggle?.addEventListener("click", () => {
  setLanguage(currentLanguage === "zh" ? "en" : "zh");
});

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter ?? "all";

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category?.split(" ") ?? [];
      const shouldShow = selected === "all" || categories.includes(selected);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;

  if (!email) {
    return;
  }

  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = translations[currentLanguage].copySuccess;
  } catch {
    copyStatus.textContent = email;
  }
});
