
This project is a **front-end-only prototype** built to closely replicate the provided Figma spreadsheet design, delivering a polished and interactive Google Sheets-like experience.


## 📎 Figma Design Reference

[Figma Design File →](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1)

---

## 🧰 Tech Stack

- ⚛️ **React 18*
- 🛡 **TypeScript** (strict mode)
- 🎨 **Tailwind CSS** (utility-first styling)
- 📊 **@tanstack/react-table v8** (for spreadsheet behavior)
- 🎯 **Lucide React** (for modern icons)


## ✅ Core Features

- ✏️ **Editable cells** with visual feedback (green border when editing)
- 🔢 **Row numbering** column (#)
- ➕ **Add new columns dynamically**
- 🧭 **Resizable columns**
- 🔄 **Horizontally scrollable table**
- 🎨 **Styled "chips" for Status and Priority**
- 🔍 **Search field** (for future integration)
- 🖼️ **Icon headers** for Submitter, URL, Status, etc.
- 📌 ** bottom bar** with tab states & button interaction
- ⚙️ **Tab click logging** to console (no dead UI)

---

## ✅ Acceptance Criteria Checklist

| Criteria | Status |
|---------|--------|
| Pixel-perfect UI as per Figma | ✅ |
| Google Sheet-like experience | ✅ |
| Buttons/tabs change state or log to console | ✅ |
| Lint + Type checks pass (`npm run lint`, `npm run type-check`) | ✅ |
| Clean commit history | ✅ |
| Stretch: Resizable columns | ✅ |

---

## 📁 Project Setup

### 1. Clone & Install

```bash
git clone https://github.com/Sourabh-km13/SheetsPage/
cd spreadsheetPage
npm install
npm run dev
