# Development Server Setup

## Quick Start

If you're getting the `ENOENT: no such file or directory, uv_cwd` error, it means your terminal has lost track of the current directory. Here are two ways to fix it:

### Option 1: Fix your terminal (Recommended)

```bash
cd "/Volumes/Mezzanine/GENNERO WEBSITE/my-website"
npm run dev
```

### Option 2: Use the direct script (Bypasses npm)

```bash
./dev.sh
```

Or from anywhere:

```bash
"/Volumes/Mezzanine/GENNERO WEBSITE/my-website/dev.sh"
```

## How It Works

The dev server automatically finds an available port starting from 3000:
- First run: Port 3000
- Second run: Port 3001 (if 3000 is busy)
- Third run: Port 3002 (if 3001 is busy)
- And so on...

You can run multiple dev servers simultaneously, each on a different port.

## Troubleshooting

If you still get errors:
1. Make sure you're in the project directory
2. Try running `./dev.sh` directly instead of `npm run dev`
3. If the terminal session seems broken, close it and open a new one

