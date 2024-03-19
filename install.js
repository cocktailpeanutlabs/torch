module.exports = {
	"run": [
//    // install cuda for nvidia
//    {
//      "when": "{{gpu === 'nvidia'}}",
//      "method": "script.run",
//      "params": {
//        "uri": "https://github.com/pinokio/cuda.git/install.json"
//      }
//    },
    // windows nvidia
    {
      "when": "{{platform === 'win32' && gpu === 'nvidia'}}",
      "method": "shell.run",
      "params": {
//        "conda": "https://github.com/pinokio/cu121.git/env",
        "venv": "{{args && args.env ? args.env : null}}",
        "message": "pip install torch torchvision torchaudio {{args && args.xformers ? 'xformers' : ''}}  --index-url https://download.pytorch.org/whl/cu121"
      }
    },
    // windows amd
    {
      "when": "{{platform === 'win32' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.env ? args.env : null}}",
        "message": "pip install torch-directml"
      }
    },
    // windows cpu
    {
      "when": "{{platform === 'win32' && (gpu !== 'nvidia' && gpu !== 'amd')}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.env ? args.env : null}}",
        "message": "pip install torch torchvision torchaudio"
      }
    },
    // mac
    {
      "when": "{{platform === 'darwin'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.env ? args.env : null}}",
        "message": "pip3 install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cpu"
      }
    },
    // linux nvidia
    {
      "when": "{{platform === 'linux' && gpu === 'nvidia'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.env ? args.env : null}}",
        "message": "pip install torch torchvision torchaudio {{args && args.xformers ? 'xformers' : ''}}"
      }
    },
    // linux rocm (amd)
    {
      "when": "{{platform === 'linux' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.env ? args.env : null}}",
        "message": "pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm5.7"
      }
    },
    // linux cpu
    {
      "when": "{{platform === 'linux' && (gpu !== 'amd' && gpu !=='amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.env ? args.env : null}}",
        "message": "pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu"
      }
    }
  ]
}
