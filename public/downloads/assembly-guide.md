# ScanBuddy-Pro Assembly Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Required Tools](#required-tools)
3. [Parts Checklist](#parts-checklist)
4. [Assembly Steps](#assembly-steps)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

---

## Introduction

Welcome to the ScanBuddy-Pro assembly guide. This document will walk you through building your own 3D laser scanner. Estimated assembly time: 2-3 hours.

---

## Required Tools

- Phillips screwdriver (PH1, PH2)
- Soldering iron (optional, for custom wiring)
- Wire strippers
- Multimeter
- Allen key set (M2, M3)
- Hot glue gun (optional)

---

## Parts Checklist

Before starting, verify you have all components:

### Electronics
- [ ] Arduino Nano
- [ ] A4988 Stepper Driver
- [ ] 650nm Line Laser Module
- [ ] OV5647 Camera Module
- [ ] NEMA 17 Stepper Motor
- [ ] 12V 2A Power Supply

### Mechanical
- [ ] 3D Printed Housing (Top)
- [ ] 3D Printed Housing (Bottom)
- [ ] Turntable Platform (200mm)
- [ ] Turntable Mount
- [ ] M3x8mm Screws (x12)
- [ ] M3x16mm Screws (x8)
- [ ] M3 Nuts (x20)
- [ ] M4x12mm Screws (x4)

### Wiring
- [ ] JST Connectors
- [ ] USB Cable (Type-B)
- [ ] Jumper Wires (x20)
- [ ] Heat Shrink Tubing

---

## Assembly Steps

### Step 1: Prepare the Housing

1. Print housing-top.stl and housing-bottom.stl
   - Material: PLA or PETG
   - Layer height: 0.2mm
   - Infill: 20%
   - Supports: Required for top piece

2. Remove support material carefully
3. Test-fit all components before final assembly

### Step 2: Install the Motor

1. Place NEMA 17 motor in the bottom housing
2. Align mounting holes with the 4x M3 holes
3. Secure with M3x16mm screws and nuts
4. Route motor cable through the cable channel

### Step 3: Mount the Turntable

1. Attach turntable mount to motor shaft
2. Secure with set screw (included with motor)
3. Place turntable platform on mount
4. Verify smooth rotation (no wobble)

### Step 4: Install Electronics

1. Mount Arduino Nano on the standoffs
2. Connect A4988 driver to the driver mount
3. Wire motor to A4988 (refer to wiring schematic)
4. Connect power input jack

### Step 5: Position the Laser

1. Insert laser module into the laser holder
2. Angle: 30° from vertical
3. Secure with M3 screw
4. Adjust position so laser line hits turntable center

### Step 6: Mount the Camera

1. Attach camera to the camera mount bracket
2. Position: 45° angle, facing turntable center
3. Focus: Set to ~150mm distance
4. Connect USB cable

### Step 7: Final Assembly

1. Carefully close the housing
2. Secure with M3x8mm screws (6 per side)
3. Attach rubber feet to bottom
4. Connect all external cables

---

## Testing

### Power-On Test
1. Connect 12V power supply
2. Status LED should illuminate
3. No smoke or unusual smells (!)

### Motor Test
1. Upload test firmware to Arduino
2. Motor should rotate smoothly
3. Listen for unusual sounds

### Laser Test
1. Enable laser via software
2. Verify line projection
3. Check alignment with turntable

### Camera Test
1. Open camera preview in software
2. Verify focus and exposure
3. Test frame capture

---

## Troubleshooting

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Motor doesn't spin | Wiring error | Check A4988 connections |
| Motor vibrates only | Wrong step sequence | Verify STEP/DIR pins |
| Laser too dim | Power issue | Check voltage (5V) |
| Camera not detected | USB issue | Try different port |
| Wobbly turntable | Loose mount | Tighten set screw |

---

## Next Steps

After successful assembly:
1. Install OpenScan3D software
2. Run calibration wizard
3. Perform your first scan!

---

Document Version: 1.0
Last Updated: 2024-12-01
License: CERN-OHL-S v2

For support: github.com/scanbuddy-pro/issues
