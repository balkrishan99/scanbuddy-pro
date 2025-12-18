# ScanBuddy-Pro Calibration Manual

## Overview

Proper calibration is essential for accurate 3D scans. This manual covers the three-stage calibration process for ScanBuddy-Pro.

---

## Calibration Stages

1. **Laser Plane Calibration** - Align the laser plane with the scanning axis
2. **Camera Calibration** - Set intrinsic camera parameters
3. **Turntable Axis Calibration** - Determine rotation center and axis

---

## Stage 1: Laser Plane Calibration

### Purpose
The laser plane equation must be computed accurately for triangulation to work.

### Required Materials
- Calibration target (included)
- Flat surface

### Procedure

1. **Place Calibration Target**
   - Position the flat calibration target on the turntable
   - Ensure it's perpendicular to the scanning plane

2. **Capture Reference Points**
   - Enable laser in calibration mode
   - Capture at least 5 different heights
   - Software will extract laser line positions

3. **Compute Plane Equation**
   - Click "Calculate Plane" in software
   - Target RMS error: < 0.5mm
   - If error is too high, clean laser lens and retry

### Mathematical Background
```
Plane equation: ax + by + cz + d = 0
Normal vector: n̂ = (a, b, c) / ||n||
```

---

## Stage 2: Camera Calibration

### Purpose
Determine camera intrinsic parameters (focal length, principal point, distortion).

### Required Materials
- Printed checkerboard pattern (9x6, 25mm squares)
- Rigid backing board

### Procedure

1. **Print Checkerboard**
   - Use included PDF or generate at calib.io
   - Print at 100% scale, no scaling
   - Attach to flat, rigid surface

2. **Capture Images**
   - Take 15-20 images of the checkerboard
   - Vary angle and distance
   - Cover all corners of the image frame
   - Avoid motion blur

3. **Run Calibration**
   - Click "Calibrate Camera" in software
   - Wait for corner detection
   - Review detected corners (should be accurate)

4. **Verify Results**
   - Target reprojection error: < 0.5 pixels
   - Save calibration file

### Camera Matrix
```
K = | fx   0  cx |
    |  0  fy  cy |
    |  0   0   1 |

Where:
- fx, fy = focal length in pixels
- cx, cy = principal point (image center)
```

---

## Stage 3: Turntable Axis Calibration

### Purpose
Determine the exact rotation axis for accurate point cloud alignment.

### Required Materials
- Calibration rod (included) or straight dowel
- Temporary mounting putty

### Procedure

1. **Mount Calibration Rod**
   - Place rod vertically at turntable center
   - Secure with putty (must not move during rotation)
   - Rod should be clearly visible to camera

2. **Capture Rotation Sequence**
   - Click "Start Axis Calibration"
   - Turntable will rotate in 10° increments
   - Software tracks rod position at each step

3. **Compute Axis**
   - Software fits 3D circle to tracked positions
   - Extracts rotation axis and center point
   - Target deviation: < 1.0mm from ideal vertical

### Verification
- Run test scan of simple object
- Check for "staircase" artifacts (indicates axis error)
- Re-calibrate if artifacts present

---

## Calibration Quality Targets

| Parameter | Target | Acceptable |
|-----------|--------|------------|
| Laser Plane RMS | < 0.3mm | < 0.5mm |
| Camera Reprojection | < 0.3px | < 0.5px |
| Axis Deviation | < 0.5mm | < 1.0mm |

---

## Saving & Loading Calibration

### Save Calibration
- File → Save Calibration
- Creates `.scanbuddy_cal` file
- Store safely for future use

### Load Calibration
- File → Load Calibration
- Select previously saved file
- Verify with quick test scan

---

## When to Recalibrate

Recalibrate if:
- Scanner has been moved or bumped
- Components have been replaced
- Scan quality has degraded
- Temperature has changed significantly (>10°C)
- After firmware updates

---

## Troubleshooting

### "Insufficient points detected"
- Increase exposure time
- Clean lens surfaces
- Reduce ambient light

### "High calibration error"
- Check for reflections
- Ensure target is flat
- Verify checkerboard print quality

### "Axis not found"
- Rod may be too thin
- Increase camera exposure
- Check rod is truly vertical

---

Document Version: 1.0
Last Updated: 2024-12-01
License: CERN-OHL-S v2
