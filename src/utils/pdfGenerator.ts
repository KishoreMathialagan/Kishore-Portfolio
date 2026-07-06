import { jsPDF } from "jspdf";

export function generateResumePDF() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  // A4 size: 210mm x 297mm
  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 15;
  const marginY = 15;

  // --- Theme Colors ---
  const PRIMARY_COLOR = "#121212";   // Deep charcoal/black
  const ACCENT_COLOR = "#d97706";    // Warm Amber (Kishore's signature color)
  const TEXT_DARK = "#1f2937";       // Dark grey for body text
  const TEXT_MUTED = "#4b5563";      // Muted grey for subheadings
  const BG_LIGHT = "#f9fafb";        // Soft background for secondary column

  // Draw elegant top bar accent
  doc.setFillColor(217, 119, 6); // Amber
  doc.rect(0, 0, pageWidth, 5, "F");

  // --- HEADER SECTION ---
  let currentY = 18;

  // Name
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("KISHORE MATHIALAGAN", marginX, currentY);

  currentY += 6;

  // Title
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(ACCENT_COLOR);
  doc.text("DIGITAL MARKETER & CREATIVE SPECIALIST", marginX, currentY);

  currentY += 6;

  // Contact Info (Single Line Layout with Icons/Dividers)
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_MUTED);
  const contactText = "Email: kishoremathialagan@gmail.com   |   Phone: +91 99766 60363   |   Location: Coimbatore, Tamil Nadu, India";
  doc.text(contactText, marginX, currentY);

  currentY += 4;

  // Divider Line
  doc.setDrawColor(229, 231, 235); // Light grey border line
  doc.setLineWidth(0.4);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);

  currentY += 8;

  // --- TWO COLUMN LAYOUT ---
  // Column 1 (Left): Work Experience, Projects (Width: 112mm)
  // Column 2 (Right): Education, Skills, Tools (Width: 58mm, starts at X = 137mm)
  const col1X = marginX;
  const col1Width = 112;
  const col2X = 137;
  const col2Width = 58;

  let leftY = currentY;
  let rightY = currentY;

  // ================= LEFT COLUMN =================

  // --- Section: WORK EXPERIENCE ---
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("WORK EXPERIENCE", col1X, leftY);
  
  // Underline for section
  leftY += 1.5;
  doc.setDrawColor(217, 119, 6); // Amber line
  doc.setLineWidth(0.5);
  doc.line(col1X, leftY, col1X + 15, leftY);
  leftY += 5;

  // Job Title & Company
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("Digital Marketing & Creative Specialist", col1X, leftY);
  
  // Date range (Right aligned of left col)
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_MUTED);
  doc.text("Nov 2024 - Sep 2025", col1X + col1Width - 30, leftY);

  leftY += 4.5;
  doc.setFont("Helvetica", "oblique");
  doc.setFontSize(9);
  doc.setTextColor(ACCENT_COLOR);
  doc.text("Destiny Dive  •  Coimbatore, TN, India", col1X, leftY);

  leftY += 5;

  // Experience Bullet Points (Wrapped safely)
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_DARK);

  const bulletPoints = [
    "Managed Instagram, WhatsApp Business, and digital communication streams for the startup, successfully boosting organic brand engagement.",
    "Designed and produced high-quality posters, Reels, and ad creatives tailored specifically to capture student and parent demographics.",
    "Formulated comprehensive weekly content calendars and executed audience-focused strategies to maximize organic account retention and community growth."
  ];

  bulletPoints.forEach((bullet) => {
    // Bullet marker
    doc.setTextColor(ACCENT_COLOR);
    doc.setFont("Helvetica", "bold");
    doc.text("•", col1X + 2, leftY);

    // Bullet text
    doc.setTextColor(TEXT_DARK);
    doc.setFont("Helvetica", "normal");
    const wrappedText = doc.splitTextToSize(bullet, col1Width - 6);
    doc.text(wrappedText, col1X + 5, leftY);
    
    // Increment Y based on text lines
    leftY += (wrappedText.length * 4) + 1;
  });

  leftY += 4;

  // --- Section: CREATIVE CAMPAIGNS & PROJECTS ---
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("CREATIVE CAMPAIGNS & PROJECTS", col1X, leftY);
  
  // Underline
  leftY += 1.5;
  doc.setDrawColor(217, 119, 6);
  doc.line(col1X, leftY, col1X + 15, leftY);
  leftY += 5;

  // Project 1
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("Clinic & Gym Referral Campaign (Physio One)", col1X, leftY);
  leftY += 4;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_DARK);
  const proj1Desc = "Created promotional materials, creative posters, and offline-to-online referral loops for local physiotherapy and fitness gym integrations, increasing regional gym traffic by 24% over 2 months.";
  const wrappedProj1 = doc.splitTextToSize(proj1Desc, col1Width - 4);
  doc.text(wrappedProj1, col1X + 2, leftY);
  leftY += (wrappedProj1.length * 4) + 3;

  // Project 2
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("Instagram Aesthetics Overhaul (Scandy Saravanampatti)", col1X, leftY);
  leftY += 4;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_DARK);
  const proj2Desc = "Conceptualized dynamic short-form Reels and visual grids while maintaining the official brand feed, achieving an 18% improvement in average viewer engagement rates and positive local response.";
  const wrappedProj2 = doc.splitTextToSize(proj2Desc, col1Width - 4);
  doc.text(wrappedProj2, col1X + 2, leftY);
  leftY += (wrappedProj2.length * 4) + 3;

  // Project 3
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("Student-Parent Outreach Campaign (Launch Drive)", col1X, leftY);
  leftY += 4;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_DARK);
  const proj3Desc = "Authored highly direct marketing copy and engineered high-impact WhatsApp broadcasts. Achieved a verified 92% open rate, driving over 150 targeted user interactions in less than three weeks.";
  const wrappedProj3 = doc.splitTextToSize(proj3Desc, col1Width - 4);
  doc.text(wrappedProj3, col1X + 2, leftY);
  leftY += (wrappedProj3.length * 4) + 3;


  // ================= RIGHT COLUMN =================

  // --- Section: EDUCATION ---
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("EDUCATION", col2X, rightY);
  
  // Underline
  rightY += 1.5;
  doc.setDrawColor(217, 119, 6);
  doc.line(col2X, rightY, col2X + 10, rightY);
  rightY += 5;

  // Degree
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(PRIMARY_COLOR);
  const degreeWrapped = doc.splitTextToSize("B.Tech in Artificial Intelligence & Data Science", col2Width);
  doc.text(degreeWrapped, col2X, rightY);
  
  rightY += (degreeWrapped.length * 4);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_MUTED);
  doc.text("2022 - 2026", col2X, rightY);

  rightY += 4;
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_DARK);
  const schoolWrapped = doc.splitTextToSize("KGISL Institute of Technology", col2Width);
  doc.text(schoolWrapped, col2X, rightY);
  
  rightY += (schoolWrapped.length * 4);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(TEXT_MUTED);
  doc.text("Coimbatore, Tamil Nadu", col2X, rightY);

  rightY += 8;

  // --- Section: CORE SKILLS ---
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("CORE SKILLS", col2X, rightY);
  
  // Underline
  rightY += 1.5;
  doc.line(col2X, rightY, col2X + 10, rightY);
  rightY += 5;

  const skills = [
    "Social Media Management",
    "Poster & Brand Creatives",
    "Digital Marketing Strategy",
    "AI Tools & Automation",
    "Content Planning",
    "Copywriting & Ads",
    "Analytical Research",
    "Reels Concepting"
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_DARK);
  
  skills.forEach((skill) => {
    doc.setTextColor(ACCENT_COLOR);
    doc.setFont("Helvetica", "bold");
    doc.text("›", col2X, rightY);
    
    doc.setTextColor(TEXT_DARK);
    doc.setFont("Helvetica", "normal");
    doc.text(skill, col2X + 3, rightY);
    rightY += 4.5;
  });

  rightY += 4;

  // --- Section: TOOLS & TECH ---
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(PRIMARY_COLOR);
  doc.text("TOOLS & TECH", col2X, rightY);
  
  // Underline
  rightY += 1.5;
  doc.line(col2X, rightY, col2X + 10, rightY);
  rightY += 5;

  const tools = [
    "Canva (Advanced)",
    "Lightroom, Photoshop",
    "Gemini, ChatGPT, Kling AI",
    "Meta Business Suite",
    "Power BI, MySQL, Python"
  ];

  tools.forEach((tool) => {
    doc.setTextColor(ACCENT_COLOR);
    doc.setFont("Helvetica", "bold");
    doc.text("•", col2X, rightY);
    
    doc.setTextColor(TEXT_DARK);
    doc.setFont("Helvetica", "normal");
    const wrappedTool = doc.splitTextToSize(tool, col2Width - 4);
    doc.text(wrappedTool, col2X + 3, rightY);
    rightY += (wrappedTool.length * 4) + 1;
  });

  // Footer note on PDF
  const footerY = Math.max(leftY, rightY) + 15;
  if (footerY < pageHeight - 15) {
    doc.setDrawColor(243, 244, 246);
    doc.line(marginX, footerY, pageWidth - marginX, footerY);
    
    doc.setFont("Helvetica", "oblique");
    doc.setFontSize(7.5);
    doc.setTextColor(TEXT_MUTED);
    doc.text("Generated directly from Kishore Mathialagan's Live Interactive Portfolio Hub.", marginX, footerY + 5);
  }

  // Download PDF
  doc.save("Kishore_Mathialagan_Resume.pdf");
}
