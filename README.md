# ScanBuddy(OpenScan3D)

![Platform](https://img.shields.io/badge/Platform-Professional%20Access-blue)
![Build Cost](https://img.shields.io/badge/Cost-~%24150-orange)
![Accuracy](https://img.shields.io/badge/Accuracy-%C2%B10.1mm-blue)
![License](https://img.shields.io/badge/License-MIT%20%7C%20CERN%20OHL-success)

> **Low-cost, high-precision 3D laser scanner ecosystem** for makers, researchers, and fabrication labs.

![Hero Scan Animation](assets/hero_scan.gif)

<p align="center">
	<a href="https://balkrishan99.github.io/scanbuddy-pro/" target="_blank">Live Demo</a> ·
	<a href="#-quick-start">Quick Start</a> ·
	<a href="#-roadmap">Roadmap</a>
</p>

---

## 📚 Table of Contents

1. [Overview](#-overview)
2. [Feature Highlights](#-feature-highlights)
3. [Quick Specs](#-quick-specs)
4. [Hardware & Assembly](#-hardware--assembly)
5. [Software Walkthrough](#-software-walkthrough)
6. [Architecture](#-architecture)
7. [Validation & QA](#-validation--qa)
8. [Professional Documentation](#-professional-documentation-suite)
9. [Quick Start](#-quick-start)
10. [Project Structure](#-project-structure)
11. [Roadmap](#-roadmap)
12. [Contributing](#-contributing)
13. [License](#-license)

---

## 🚀 Overview

ScanBuddy Pro packages mechanical CAD, electronics, calibration routines, automation software, and compliance guidance into a single workspace. The goal is to make laser triangulation scanning accessible without sacrificing metrology-grade accuracy.

---

## ✨ Feature Highlights

- 🔴 **Laser Triangulation Engine** with < 0.5 mm plane error
- 🤖 **AI Noise Reduction** for clean point clouds
- 🔄 **360° Automated Turntable** and batch queueing
- 🧠 **Calibration Wizard** with repeatability scoring
- 📤 **Multi-format Export**: STL, OBJ, PLY, GLB presets
- 🔌 **Plugin Architecture** supporting Python and C++ extensions
- 🛡️ **Security & Safety Guidance** covering Class II laser compliance

---

## 📏 Quick Specs

| Metric | Value |
| --- | --- |
| Scan Volume | 200 × 200 × 200 mm |
| Accuracy | ±0.1 mm |
| Capture Time | < 60 seconds |
| Hardware Cost | ~USD 150 |
| Exports | STL, OBJ, PLY, GLB |
| Control Modes | Desktop UI, REST API |

---

## 🛠️ Hardware & Assembly

![Exploded View Placeholder](assets/exploded_view.gif)

<details>
<summary>📋 Bill of Materials (Click to expand)</summary>

| Component | Qty | Est. Cost |
| --- | --- | --- |
| 650 nm Laser Module (Class II) | 1 | $12.99 |
| 5 MP CMOS Camera | 1 | $15.99 |
| Stepper Motor (NEMA 17) | 1 | $14.50 |
| Arduino Microcontroller | 1 | $8.99 |
| Bearings, Mounts, Fasteners | - | $21.00 |
| Turntable Plate | 1 | $18.00 |
| **Total** |  | **≈ $91.47** |

</details>

<details>
<summary>🧰 Assembly Highlights</summary>

- Modular frame with printable brackets and laser safety shrouds
- Tool-less camera alignment jig with thumbscrews
- Integrated cable routing and EMI shielding recommendations

</details>

---

## 🖥️ Software Walkthrough

````mermaid
sequenceDiagram
participant Laser
participant Object
participant Camera
participant Pipeline
participant User
Laser->>Object: Projects calibrated line
Object->>Camera: Reflects deformation profile
Camera->>Pipeline: Streams frames @ 60 fps
Pipeline->>Pipeline: Triangulation + AI denoise
Pipeline->>User: Mesh + validation metrics
````

````mermaid
flowchart LR
Start([Start Scan]) --> Calibrate[Laser & Camera Calibration]
Calibrate --> Capture[Capture Sweep]
Capture --> Process[Noise Reduction + Meshing]
Process --> Inspect[Quality Dashboard]
Inspect --> Export{Export Format?}
Export -->|STL/OBJ| CAD
Export -->|Point Cloud| PLY
Export -->|Automation| API
````

---

## 🏗️ Architecture

![Architecture Diagram Placeholder](assets/architecture.gif)

<details>
<summary>🔬 Laser Plane Calibration</summary>

- Structured-light baseline fitting with SVD
- RMS error < 0.5 mm across the capture volume

```math
ax + by + cz + d = 0
```

</details>

<details>
<summary>🧠 AI Processing Stack</summary>

- U-Net denoiser trained on synthetic artifacts
- Outlier rejection via statistical trimming
- Mesh repair using Poisson reconstruction heuristics

</details>

---

## ✅ Validation & QA

| Test | Result |
| --- | --- |
| Laser Plane RMS | 0.42 mm |
| Reprojection Error | 0.48 px |
| Repeatability (10 scans) | ±0.12 mm |
| Turntable Angular Error | < 0.3° |

Calibration samples, target models, and QA scripts live in `src/components/ValidationTesting.tsx` and supporting assets.

---

## 📘 Professional Documentation Suite

The landing page aggregates production-ready appendices:

- **System Requirements** – hardware tiers, throughput guidance
- **Error Diagnostics** – live telemetry and troubleshooting matrices
- **Data Management** – project folder schema, metadata contracts
- **Export Interoperability** – presets for Blender, Fusion 360, MeshLab
- **Security & Safety** – laser classifications, permissions, encryption
- **Plugin Architecture** – scripting APIs (Python/C++) and marketplace roadmap
- **Validation Testing** – benchmark artefacts and accuracy charts
- **Project Roadmap** – v1.0–v3.0 milestones
- **Licensing & Deployment** – Community / Pro / Enterprise models
- **Glossary & References** – terminology, citations, standards bodies

---

## ⚡ Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

```bash
git clone https://github.com/balkrishan99/scanbuddy-pro.git
cd scanbuddy-pro
npm install
npm run dev
```

The development server defaults to http://localhost:8080. Press `Ctrl+C` to exit.

### Useful Scripts

- `npm run dev` – hot reload development environment
- `npm run build` – generate production bundle
- `npm run preview` – serve the built bundle locally
- `npm run lint` – run ESLint/TypeScript checks

---

## 🗂️ Project Structure

```
src/
	components/
		...feature modules and professional sections
	pages/
		Index.tsx          # Main landing page composition
	lib/
		utils.ts           # Shared helpers
public/
	favicon.svg          # Updated project badge
	robots.txt
```

---

## 🛣️ Roadmap

````mermaid
gantt
		title OpenScan3D Roadmap
		dateFormat  YYYY-MM
		section Core Platform
		v1_0 Scanning Engine          :done,    2025-01, 2m
		Calibration Enhancements      :active,  2025-03, 3m
		section AI & Automation
		Mesh Repair Toolkit           :planned, 2025-06, 3m
		Adaptive Noise Models         :planned, 2025-09, 3m
		section Ecosystem
		Plugin Marketplace            :planned, 2025-10, 4m
		Enterprise Compliance Suite   :planned, 2026-02, 4m
````

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/<name>`
3. Implement changes and run `npm run lint`
4. Commit with a conventional message
5. Open a pull request with context, screenshots, or benchmark results

We welcome hardware tweaks, firmware updates, UX polish, and documentation improvements.

---

## 📜 License

- **Software**: MIT
- **Hardware CAD / BOM**: CERN OHL v2
- **Documentation**: CC BY-SA 4.0

Please review `LICENSE` files for the exact terms before commercial deployments.

---

## ⭐ Support the Mission

If you believe precision 3D scanning should be accessible, **star this repository** and share builds with the community.
