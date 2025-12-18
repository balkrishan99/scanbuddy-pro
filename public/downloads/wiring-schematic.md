# ScanBuddy-Pro Wiring Schematic

## Overview
This document describes the electrical connections for the ScanBuddy-Pro 3D laser scanner.

---

## Component List
| Component | Model | Voltage | Current |
|-----------|-------|---------|---------|
| Laser Module | 650nm Line Laser | 5V | 40mA |
| Camera | OV5647 | 3.3V | 250mA |
| Stepper Motor | NEMA 17 | 12V | 1.5A |
| Motor Driver | A4988 | 8-35V | 2A max |
| Microcontroller | Arduino Nano | 5V | 50mA |

---

## Pin Connections

### Arduino Nano Pinout
```
D2  → Laser Control (PWM)
D3  → Motor STEP
D4  → Motor DIR
D5  → Motor ENABLE
D6  → Status LED
A0  → Light Sensor (optional)
GND → Common Ground
VIN → 12V Input
```

### A4988 Driver Connections
```
VDD    → 5V (Arduino)
GND    → Common Ground
STEP   → D3 (Arduino)
DIR    → D4 (Arduino)
ENABLE → D5 (Arduino)
VMOT   → 12V Power Supply
1A/1B  → Motor Coil A
2A/2B  → Motor Coil B
```

### Laser Module
```
VCC → 5V (through D2 via transistor)
GND → Common Ground
```

### Camera Module (USB)
```
Connect directly to PC/Raspberry Pi via USB
```

---

## Power Requirements
- **Total System Power**: 12V 2A DC adapter
- **Peak Current**: ~1.8A during motor operation
- **Standby Current**: ~300mA

---

## Safety Notes
⚠️ Always disconnect power before making wiring changes
⚠️ Use appropriate wire gauge (18-22 AWG recommended)
⚠️ Ensure proper heat dissipation for motor driver
⚠️ Never look directly into the laser beam

---

## Schematic Diagram

```
    +12V ─────┬─────────────────┐
              │                 │
           [A4988]           [Buck]
              │              5V │
    Arduino ──┼──────────────┬──┘
      D2 ─────┼──[Transistor]──[LASER]
      D3 ─────┤ STEP
      D4 ─────┤ DIR
      D5 ─────┤ EN
              │
           [MOTOR]
              │
    GND ──────┴─────────────────────
```

---

Document Version: 1.0
Last Updated: 2024-12-01
License: CERN-OHL-S v2
