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
    pageTitle: "Sean Zhang | 金融分析与风险管理",
    metaDescription: "Sean Zhang 的个人网站，展示金融分析、风险管理、数据分析、Excel 自动化项目和简历。",
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
    heroEyebrow: "金融分析 / 风险管理 / 数据分析",
    heroSummary:
      "我专注于金融分析、信用风险、数据建模和 Excel 自动化，把银行实习经验、风险分析项目和技术能力结合起来，做出清晰、可靠、可执行的业务洞察。",
    heroActionsAria: "主要操作",
    heroProjectsButton: "查看项目",
    heroResumeButton: "下载简历",
    heroFactsAria: "个人概览",
    factFocusLabel: "Focus",
    factFocusValue: "金融分析、信用风险、Excel 自动化",
    factEducationLabel: "Education",
    factEducationValue: "University of Waterloo · BMath FARM",
    factToolsLabel: "Tools",
    factToolsValue: "Python, Power BI, Excel/VBA, SQL",
    introAria: "简介",
    profileEyebrow: "Profile",
    profileTitle: "用金融判断和数据工具解决真实业务问题。",
    profileBody:
      "我目前在 University of Waterloo 攻读 Financial Analysis and Risk Management，并辅修 Computing。我的经历集中在私人银行服务、GIC 客户流程、信用风险分析、Excel/VBA 自动化和 AI 辅助内容优化。",
    resumeEyebrow: "Resume",
    resumeTitle: "简历快照",
    resumeBody:
      "这里突出和 finance、risk management、data analytics 最相关的经历。完整版本可以直接下载 PDF 简历。",
    resumeDownload: "下载完整 PDF 简历",
    experienceTitle: "Experience",
    bmoGicDate: "2025.09 - 2025.12",
    bmoGicTitle: "Bank of Montreal · Private Banking Services · GIC Intern",
    bmoGicBody:
      "处理 300+ 次 GIC 客户沟通和 100+ 份学生 GIC/银行账户申请，并通过 Excel 模板和 CSV 主数据生成、校验每日申请报告。",
    bmoPbsDate: "2025.04 - 2025.08",
    bmoPbsTitle: "Bank of Montreal · Private Banking Services · PBS Intern",
    bmoPbsBody:
      "支持 100+ 名跨境客户完成 Asian Referral Program，并开发 Excel VBA 自动化工具导入 CSV 客户数据、填写服务表格、生成个性化邮件。",
    dundasDate: "2024.10 - 2024.12",
    dundasTitle: "Dundas Life · AI Generated Content Creation and Optimization",
    dundasBody:
      "使用 ChatGPT、OpenAI 和 SEO 工作流生成、编辑、审核 50+ 篇内容，优化搜索可见性、可读性和关键词匹配。",
    educationTitle: "Education",
    waterlooDate: "2023.09 - 2028.05",
    waterlooTitle: "University of Waterloo · BMath in Financial Analysis and Risk Management",
    waterlooBody:
      "Computing Minor, Co-op。学习重点包括金融分析、风险管理、编程、数据分析和面向业务决策的量化工具。",
    techDate: "Technologies",
    techTitle: "Finance + Analytics Toolkit",
    techBody:
      "Python, R, C, VBA, Bash, Excel, PivotTables, XLOOKUP, COUNTIFS, Power BI, pandas, scikit-learn, SQL。",
    projectsEyebrow: "Projects",
    projectsTitle: "项目作品",
    projectsBody:
      "项目重点放在信用风险、金融数据分析和 Excel 自动化，展示如何把数据处理、模型判断和业务解释连起来。",
    projectFiltersAria: "项目筛选",
    filterAll: "全部",
    filterFinance: "金融",
    filterRisk: "风险",
    filterExcel: "Excel",
    filterData: "数据",
    creditProjectType: "信用风险 · 数据分析",
    creditProjectTitle: "Credit Risk Analytics Dashboard and Classification Project",
    creditProjectBody:
      "使用 Python 分析 1,000 名德国信用申请人，并用 Power BI 搭建交互式仪表盘，追踪违约率、贷款敞口、风险分层和 false-negative risk。",
    techStackAria: "技术栈",
    projectGithubLink: "GitHub",
    projectResumeLink: "见简历",
    excelProjectType: "Excel/VBA · 银行流程自动化",
    excelProjectTitle: "BMO Client Service Form Automation",
    excelProjectBody:
      "开发 Excel VBA 工具，从 CSV 导入客户数据，自动填写服务表格并生成个性化客户邮件，减少手工录入，提高处理准确性。",
    gicProjectType: "Excel Reporting · GIC Operations",
    gicProjectTitle: "Daily GIC Application Reporting Workflow",
    gicProjectBody:
      "刷新连接主申请 CSV 文件的 Excel 模板，生成并校验每日 GIC 申请报告，汇总新增和更新申请，支持后续跟踪管理。",
    seoProjectType: "AI + Analytics · SEO",
    seoProjectTitle: "AI-Assisted Content Optimization",
    seoProjectBody:
      "使用 AI 工具和 SEO 原则生成、编辑、审核 50+ 篇内容，提升搜索可见性、可读性、关键词一致性和品牌语气。",
    skillsEyebrow: "Skills",
    skillsTitle: "技能方向",
    skillsBody:
      "技能展示按 finance 和 risk management 方向重新排序，把金融工具、数据分析和自动化能力放在前面。",
    skillFinanceTitle: "Finance & Risk",
    skillFinanceBody: "Credit risk, GIC services, loan exposure, liquidity risk, risk segmentation",
    skillAnalyticsTitle: "Data Analytics",
    skillAnalyticsBody: "Python, pandas, scikit-learn, Power BI, SQL, R, data validation",
    skillExcelTitle: "Excel Automation",
    skillExcelBody: "Excel, VBA, PivotTables, XLOOKUP, COUNTIFS, CSV workflows, reporting templates",
    skillToolsTitle: "Tools & Communication",
    skillToolsBody: "Git, SSMS, DBeaver, Linux, LaTeX, client communication, English and Mandarin",
    contactEyebrow: "Contact",
    contactTitle: "欢迎联系我讨论金融、风险管理、数据分析或实习机会。",
    contactEmailButton: "发送邮件",
    contactLinkedinButton: "LinkedIn",
    contactCopyButton: "复制邮箱",
    copySuccess: "邮箱已复制",
    footerText: "© 2026 Sean Zhang. Finance, risk management, analytics, and automation.",
    footerTop: "回到顶部",
  },
  en: {
    pageTitle: "Sean Zhang | Finance & Risk Management",
    metaDescription:
      "Sean Zhang's personal website for finance, risk management, data analytics, Excel automation projects, and resume.",
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
    heroEyebrow: "Finance / Risk Management / Data Analytics",
    heroSummary:
      "I focus on financial analysis, credit risk, data modeling, and Excel automation, combining banking experience, risk analytics projects, and technical skills to produce clear, reliable, and actionable business insights.",
    heroActionsAria: "Primary actions",
    heroProjectsButton: "View Projects",
    heroResumeButton: "Download Resume",
    heroFactsAria: "Personal overview",
    factFocusLabel: "Focus",
    factFocusValue: "Financial analysis, credit risk, Excel automation",
    factEducationLabel: "Education",
    factEducationValue: "University of Waterloo · BMath FARM",
    factToolsLabel: "Tools",
    factToolsValue: "Python, Power BI, Excel/VBA, SQL",
    introAria: "Profile summary",
    profileEyebrow: "Profile",
    profileTitle: "Solving real business problems with financial judgment and data tools.",
    profileBody:
      "I am pursuing a BMath in Financial Analysis and Risk Management at the University of Waterloo with a Computing Minor. My experience spans private banking services, GIC client workflows, credit risk analytics, Excel/VBA automation, and AI-assisted content optimization.",
    resumeEyebrow: "Resume",
    resumeTitle: "Resume Snapshot",
    resumeBody:
      "This section highlights the experiences most relevant to finance, risk management, and data analytics. The full PDF resume is available to download.",
    resumeDownload: "Download full PDF resume",
    experienceTitle: "Experience",
    bmoGicDate: "Sep 2025 - Dec 2025",
    bmoGicTitle: "Bank of Montreal · Private Banking Services · GIC Intern",
    bmoGicBody:
      "Handled 300+ GIC client communications and 100+ student GIC and bank account applications, while generating and validating daily application reports from Excel templates connected to master CSV files.",
    bmoPbsDate: "Apr 2025 - Aug 2025",
    bmoPbsTitle: "Bank of Montreal · Private Banking Services · PBS Intern",
    bmoPbsBody:
      "Guided 100+ cross-border clients through the Asian Referral Program and built an Excel VBA automation tool to import CSV customer data, auto-fill service forms, and generate personalized client emails.",
    dundasDate: "Oct 2024 - Dec 2024",
    dundasTitle: "Dundas Life · AI Generated Content Creation and Optimization",
    dundasBody:
      "Used ChatGPT, OpenAI, and SEO workflows to generate, edit, and audit 50+ content pieces, improving search visibility, readability, and keyword alignment.",
    educationTitle: "Education",
    waterlooDate: "Sep 2023 - May 2028",
    waterlooTitle: "University of Waterloo · BMath in Financial Analysis and Risk Management",
    waterlooBody:
      "Computing Minor, Co-op. Academic focus includes financial analysis, risk management, programming, data analytics, and quantitative tools for business decisions.",
    techDate: "Technologies",
    techTitle: "Finance + Analytics Toolkit",
    techBody:
      "Python, R, C, VBA, Bash, Excel, PivotTables, XLOOKUP, COUNTIFS, Power BI, pandas, scikit-learn, SQL.",
    projectsEyebrow: "Projects",
    projectsTitle: "Selected Projects",
    projectsBody:
      "These projects emphasize credit risk, financial data analysis, and Excel automation, showing how data processing, model judgment, and business interpretation connect.",
    projectFiltersAria: "Project filters",
    filterAll: "All",
    filterFinance: "Finance",
    filterRisk: "Risk",
    filterExcel: "Excel",
    filterData: "Data",
    creditProjectType: "Credit Risk · Data Analytics",
    creditProjectTitle: "Credit Risk Analytics Dashboard and Classification Project",
    creditProjectBody:
      "Analyzed 1,000 German credit applicants with Python and built an interactive Power BI dashboard to monitor default rate, loan exposure, risk segmentation, and false-negative risk.",
    techStackAria: "Technology stack",
    projectGithubLink: "GitHub",
    projectResumeLink: "Resume",
    excelProjectType: "Excel/VBA · Banking Process Automation",
    excelProjectTitle: "BMO Client Service Form Automation",
    excelProjectBody:
      "Developed an Excel VBA tool to import customer data from CSV files, auto-fill service forms, and generate personalized client emails, reducing manual data entry and improving processing accuracy.",
    gicProjectType: "Excel Reporting · GIC Operations",
    gicProjectTitle: "Daily GIC Application Reporting Workflow",
    gicProjectBody:
      "Refreshed Excel templates linked to master application CSV files to generate and validate daily GIC application reports, summarizing new and updated applications for follow-up management.",
    seoProjectType: "AI + Analytics · SEO",
    seoProjectTitle: "AI-Assisted Content Optimization",
    seoProjectBody:
      "Used AI tools and SEO principles to generate, edit, and audit 50+ content pieces, improving search visibility, readability, keyword consistency, and brand voice.",
    skillsEyebrow: "Skills",
    skillsTitle: "Skill Areas",
    skillsBody:
      "The skills section is reordered around finance and risk management, putting financial tools, analytics, and automation capabilities first.",
    skillFinanceTitle: "Finance & Risk",
    skillFinanceBody: "Credit risk, GIC services, loan exposure, liquidity risk, risk segmentation",
    skillAnalyticsTitle: "Data Analytics",
    skillAnalyticsBody: "Python, pandas, scikit-learn, Power BI, SQL, R, data validation",
    skillExcelTitle: "Excel Automation",
    skillExcelBody: "Excel, VBA, PivotTables, XLOOKUP, COUNTIFS, CSV workflows, reporting templates",
    skillToolsTitle: "Tools & Communication",
    skillToolsBody: "Git, SSMS, DBeaver, Linux, LaTeX, client communication, English and Mandarin",
    contactEyebrow: "Contact",
    contactTitle: "Reach out to discuss finance, risk management, data analytics, or internship opportunities.",
    contactEmailButton: "Email Me",
    contactLinkedinButton: "LinkedIn",
    contactCopyButton: "Copy Email",
    copySuccess: "Email copied",
    footerText: "© 2026 Sean Zhang. Finance, risk management, analytics, and automation.",
    footerTop: "Back to top",
  },
};

let currentLanguage = localStorage.getItem("preferredLanguage") === "en" ? "en" : "zh";

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
