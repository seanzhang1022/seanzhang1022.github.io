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
    pageTitle: "Sean Zhang | 数据分析、风险管理与业务分析",
    metaDescription: "Sean Zhang 的个人网站，展示数据分析、风险管理、业务分析、Excel 自动化项目和简历。",
    skipLink: "跳到主要内容",
    brandAria: "Sean Zhang 首页",
    mainNavAria: "主导航",
    navResume: "简历",
    navProjects: "项目",
    navSkills: "技能",
    navContact: "联系",
    languageToggle: "EN",
    languageToggleAria: "切换到英文",
    menuToggle: "打开导航",
    heroAria: "个人介绍",
    heroEyebrow: "数据分析、风险管理、业务分析",
    heroSummary:
      "我结合银行运营经验、Python、Power BI、SQL 和 Excel/VBA，搭建风险仪表盘、验证运营数据，并自动化重复性工作流程。",
    heroActionsAria: "主要操作",
    heroProjectsButton: "查看项目",
    heroResumeButton: "下载简历",
    heroFactsAria: "个人概览",
    factFocusLabel: "Client communications",
    factFocusValue: "300+ 次 GIC 客户沟通",
    factEducationLabel: "Applications",
    factEducationValue: "100+ 份银行申请处理",
    factToolsLabel: "Automation",
    factToolsValue: "VBA 每周节省 2-4 小时",
    introAria: "简介",
    profileEyebrow: "Profile",
    profileTitle: "用金融判断和数据工具搭建实用分析方案。",
    profileBody:
      "我目前在 University of Waterloo 攻读 Financial Analysis and Risk Management，并辅修 Computing。我的经历集中在银行运营、信用风险分析、Excel/VBA 自动化、Power BI 仪表盘和 Python 数据建模。",
    resumeEyebrow: "Resume",
    resumeTitle: "简历快照",
    resumeBody:
      "这里突出和 data analytics、risk management、business analysis 最相关的经历。完整版本可以直接下载 PDF 简历。",
    resumeDownload: "下载完整 PDF 简历",
    experienceTitle: "Experience",
    bmoGicDate: "2025.09 - 2025.12",
    bmoGicTitle: "Bank of Montreal · Private Banking Services · GIC Intern",
    bmoGicBody:
      "使用连接 CSV 主数据的 Excel 模板生成并校验每日 GIC 申请报告，支持 100+ 份申请和后续跟进优先级追踪。",
    bmoGicBullet1:
      "使用连接主 CSV 文件的 Excel 模板生成并校验每日 GIC 申请报告。",
    bmoGicBullet2:
      "处理 100+ 份学生 GIC 和银行账户申请，并与客户和内部团队协调跟进。",
    bmoGicBullet3:
      "处理 300+ 次关于 GIC 流程、文件要求、开户步骤和后续事项的客户沟通。",
    bmoPbsDate: "2025.04 - 2025.08",
    bmoPbsTitle: "Bank of Montreal · Private Banking Services · PBS Intern",
    bmoPbsBody:
      "支持 100+ 名跨境客户完成 Asian Referral Program，并开发 Excel VBA 自动化工具导入 CSV 客户数据、填写服务表格、生成个性化邮件，每周节省约 2-4 小时手动工作。",
    bmoPbsBullet1:
      "开发 Excel VBA 自动化工具导入客户数据、自动填写服务表格并生成个性化邮件，每周减少约 2-4 小时重复手动工作。",
    bmoPbsBullet2:
      "支持 BMO Asian Referral Program，引导 100+ 名跨境客户完成开户流程。",
    bmoPbsBullet3:
      "处理大量英文和中文邮件/电话，解释银行流程、KYC 文件要求、申请状态和开户问题。",
    educationTitle: "Education",
    waterlooDate: "2023.09 - 2028.05",
    waterlooTitle: "University of Waterloo · BMath in Financial Analysis and Risk Management",
    waterlooBody:
      "Computing Minor, Co-op。学习重点包括金融分析、风险管理、编程、数据分析和面向业务决策的量化工具。",
    techDate: "Technologies",
    techTitle: "Finance + Analytics Toolkit",
    techBody:
      "Python, SQL, VBA, R, Excel, Power BI, pandas, scikit-learn, data validation, dashboarding。",
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
    projectResumeLink: "见简历",
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
    excelProjectType: "Excel/VBA · 银行流程自动化",
    excelProjectTitle: "Excel VBA Banking Workflow Automation",
    excelProjectBody:
      "开发 Excel VBA 工具，从 CSV 导入客户数据，自动填写服务表格并生成个性化客户邮件，每周节省约 2-4 小时手动工作，同时提升处理准确性。",
    excelProjectBullet1:
      "开发 Excel VBA 工具，从 CSV 文件导入客户数据，自动填写服务表格并生成个性化邮件。",
    excelProjectBullet2:
      "每周减少约 2-4 小时重复手动录入工作，同时提升流程一致性。",
    skillsEyebrow: "Skills",
    skillsTitle: "技能方向",
    skillsBody:
      "技能内容已与最终简历方向对齐，聚焦 data analytics、risk management、business analysis 和核心工具。",
    skillFinanceTitle: "Risk Management",
    skillFinanceBody: "Credit risk, portfolio risk analysis, lending decisions, process improvement",
    skillAnalyticsTitle: "Data Analytics",
    skillAnalyticsBody: "Excel, PivotTables, dashboards, advanced formulas, Power BI, pandas, scikit-learn",
    skillExcelTitle: "Programming",
    skillExcelBody: "Python, SQL, VBA, R",
    skillToolsTitle: "Tools",
    skillToolsBody: "VS Code, Git, Linux",
    contactEyebrow: "Contact",
    contactTitle: "欢迎联系我讨论数据分析、风险管理、业务分析或实习机会。",
    contactEmailButton: "发送邮件",
    contactLinkedinButton: "LinkedIn",
    contactGithubButton: "GitHub",
    contactResumeButton: "下载简历",
    contactCopyButton: "复制邮箱",
    copySuccess: "邮箱已复制",
    footerText: "© 2026 Sean Zhang. Finance, risk management, analytics, and automation.",
    footerTop: "回到顶部",
  },
  en: {
    pageTitle: "Sean Zhang | Data Analytics, Risk Management & Business Analysis",
    metaDescription:
      "Sean Zhang's personal website for data analytics, risk management, business analysis, Excel automation projects, and resume.",
    skipLink: "Skip to main content",
    brandAria: "Sean Zhang home",
    mainNavAria: "Primary navigation",
    navResume: "Resume",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",
    languageToggle: "中文",
    languageToggleAria: "Switch to Chinese",
    menuToggle: "Open navigation",
    heroAria: "Personal introduction",
    heroEyebrow: "Data Analytics, Risk Management, Business Analysis",
    heroSummary:
      "I combine banking operations experience with Python, Power BI, SQL, and Excel/VBA to build risk dashboards, validate operational data, and automate repetitive workflows.",
    heroActionsAria: "Primary actions",
    heroProjectsButton: "View Projects",
    heroResumeButton: "Download Resume",
    heroFactsAria: "Personal overview",
    factFocusLabel: "Client communications",
    factFocusValue: "300+ handled across GIC workflows",
    factEducationLabel: "Applications",
    factEducationValue: "100+ banking applications processed",
    factToolsLabel: "Automation",
    factToolsValue: "2-4 hours saved per week with VBA",
    introAria: "Profile summary",
    profileEyebrow: "Profile",
    profileTitle: "Building practical analytics solutions with financial judgment and data tools.",
    profileBody:
      "Finance and risk analytics student at the University of Waterloo with experience in banking operations, Excel/VBA automation, Power BI, Python, and credit risk modeling. I build practical analytics solutions that improve reporting accuracy, workflow efficiency, and business decision-making.",
    resumeEyebrow: "Resume",
    resumeTitle: "Resume Snapshot",
    resumeBody:
      "This section highlights the experiences most relevant to data analytics, risk management, and business analysis. The full PDF resume is available to download.",
    resumeDownload: "Download full PDF resume",
    experienceTitle: "Experience",
    bmoGicDate: "Sep 2025 - Dec 2025",
    bmoGicTitle: "Bank of Montreal · Private Banking Services · GIC Intern",
    bmoGicBody:
      "Generated and validated daily GIC application reports using Excel templates connected to master CSV files, supporting the tracking of 100+ applications and follow-up priorities.",
    bmoGicBullet1:
      "Generated and validated daily GIC application reports using Excel templates linked to master CSV files.",
    bmoGicBullet2:
      "Processed 100+ student GIC and bank account applications, coordinating with clients and internal teams.",
    bmoGicBullet3:
      "Handled 300+ client communications on GIC procedures, documentation, account-opening steps, and follow-up requirements.",
    bmoPbsDate: "Apr 2025 - Aug 2025",
    bmoPbsTitle: "Bank of Montreal · Private Banking Services · PBS Intern",
    bmoPbsBody:
      "Guided 100+ cross-border clients through the Asian Referral Program and built an Excel VBA automation tool to import CSV customer data, auto-fill service forms, and generate personalized client emails, saving approximately 2-4 hours of manual work per week.",
    bmoPbsBullet1:
      "Built an Excel VBA automation tool to import customer data, auto-fill service forms, and generate personalized client emails, reducing repetitive manual work by approximately 2-4 hours per week.",
    bmoPbsBullet2:
      "Supported BMO's Asian Referral Program by guiding 100+ cross-border clients through account-opening procedures.",
    bmoPbsBullet3:
      "Managed high-volume English and Mandarin emails/calls on banking procedures, KYC documentation, application status, and onboarding issues.",
    educationTitle: "Education",
    waterlooDate: "Sep 2023 - May 2028",
    waterlooTitle: "University of Waterloo · BMath in Financial Analysis and Risk Management",
    waterlooBody:
      "Computing Minor, Co-op. Academic focus includes financial analysis, risk management, programming, data analytics, and quantitative tools for business decisions.",
    techDate: "Technologies",
    techTitle: "Finance + Analytics Toolkit",
    techBody:
      "Python, SQL, VBA, R, Excel, Power BI, pandas, scikit-learn, data validation, dashboarding.",
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
    projectResumeLink: "Resume",
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
    excelProjectType: "Excel/VBA · Banking Process Automation",
    excelProjectTitle: "Excel VBA Banking Workflow Automation",
    excelProjectBody:
      "Built an Excel VBA tool to import client data from CSV files, populate service forms, and generate personalized emails, saving approximately 2-4 hours of manual work per week.",
    excelProjectBullet1:
      "Built an Excel VBA tool to import client data from CSV files, populate service forms, and generate personalized emails.",
    excelProjectBullet2:
      "Reduced repetitive manual data entry by approximately 2-4 hours per week while improving workflow consistency.",
    skillsEyebrow: "Skills",
    skillsTitle: "Skill Areas",
    skillsBody:
      "The skills section is aligned with the final resume and focused on data analytics, risk management, business analysis, and core tools.",
    skillFinanceTitle: "Risk Management",
    skillFinanceBody: "Credit risk, portfolio risk analysis, lending decisions, process improvement",
    skillAnalyticsTitle: "Data Analytics",
    skillAnalyticsBody: "Excel, PivotTables, dashboards, advanced formulas, Power BI, pandas, scikit-learn",
    skillExcelTitle: "Programming",
    skillExcelBody: "Python, SQL, VBA, R",
    skillToolsTitle: "Tools",
    skillToolsBody: "VS Code, Git, Linux",
    contactEyebrow: "Contact",
    contactTitle: "Reach out to discuss data analytics, risk management, business analysis, or internship opportunities.",
    contactEmailButton: "Email Me",
    contactLinkedinButton: "LinkedIn",
    contactGithubButton: "GitHub",
    contactResumeButton: "Download Resume",
    contactCopyButton: "Copy Email",
    copySuccess: "Email copied",
    footerText: "© 2026 Sean Zhang. Finance, risk management, analytics, and automation.",
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
