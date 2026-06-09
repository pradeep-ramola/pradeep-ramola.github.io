export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'fullstack' | 'ai-ml' | 'nlp' | 'cv' | 'llm';
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'tinygpt',
    title: 'TinyGPT: Character-Level GPT',
    description: 'Built a 145K-parameter decoder-only GPT from scratch with causal multi-head self-attention and advanced training techniques',
    longDescription:
      'Implemented a complete GPT decoder from scratch featuring causal multi-head self-attention, pre-norm blocks, GELU MLPs, residual connections, positional embeddings, and tied embeddings Trained on TinyShakespeare using AdamW optimizer, cosine LR scheduling, gradient clipping, and checkpointing Achieved significant loss reduction from 3.185 to 2.725 and implemented temperature-based autoregressive generation',
    technologies: ['Python', 'PyTorch', 'Transformers'],
    category: 'ai-ml',
    featured: true,
  },
  {
    id: 'vit-cifar',
    title: 'Vision Transformer for CIFAR-10 Classification',
    description: 'Implemented Vision Transformer from scratch with advanced attention analysis and ablation studies',
    longDescription:
      'Built a complete Vision Transformer implementation with convolutional patch embeddings, learnable CLS token, multi-head self-attention, pre-norm blocks, and classifier head Conducted comprehensive ablation studies across patch sizes, model depths, and positional encodings Developed custom metrics including attention-entropy and spatial-correlation to analyze patch-level attention behavior',
    technologies: ['Python', 'PyTorch', 'Computer Vision'],
    category: 'cv',
    featured: true,
    github: 'https://github.com/pradeep-ramola/vision-transformer',
  },
  {
    id: 'bert-hate-speech',
    title: 'BERT Fine-Tuning for Hate Speech Classification',
    description: 'Fine-tuned BERTweet for multi-class hate speech classification with LoRA and fairness analysis',
    longDescription:
      'Fine-tuned BERTweet on the THOS Twitter dataset for 3-class hate speech classification Improved Test Macro F1 from 0.6486 to 0.6848 using domain adaptation, focal loss, and cosine learning rate scheduling Applied LoRA to reduce trainable parameters from 109M to 297K while retaining 98.3% of full fine-tuning performance Added comprehensive fairness analysis and attention-based explainability across target groups',
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'NLP'],
    category: 'nlp',
    featured: true,
    github: 'https://github.com/pradeep-ramola/bert-fine-tuning-',
  },
  {
    id: 'victor-ai',
    title: 'Victor AI - Agentic AI Assistant for International Students',
    description: 'Built during IBM Hackathon 2026 with multi-agent workflows and tool integration',
    longDescription:
      'Created an agentic AI assistant for international students using IBM watsonx Orchestrate multi-agent workflows Integrated email tools, calendar management, and web scraping capabilities across 50+ universities Implemented autonomous agent reasoning for student support tasks',
    technologies: ['IBM watsonx Orchestrate', 'Multi-Agent Workflows', 'Web Scraping'],
    category: 'llm',
    featured: true,
  },
  {
    id: 'braille-sense',
    title: 'BrailleSense - Real-Time Accessibility Translator',
    description: 'Built during UB Hacking 2025 as a real-time speech, text, and video to Braille translator',
    longDescription:
      'Created a comprehensive accessibility application that translates speech, text, and video inputs to Braille in real time Focused on improving accessibility for visually impaired users',
    technologies: ['Speech Recognition', 'Computer Vision', 'Braille Translation'],
    category: 'cv',
    featured: true,
  },
  {
    id: 'ai-native-control-tower',
    title: 'AI-Native Delivery Control Tower',
    description: 'Built a local-first delivery control tower with agent planning, patch generation, risk scoring, policy gates, canary signals, and rollback handling',
    longDescription:
      'Built a software delivery control tower inspired by agentic delivery platforms, with task intake, agent planning, patch generation, validation, explainable risk scoring, release policy gates, canary telemetry, rollback handling, and SQLite persistence',
    technologies: ['Python', 'FastAPI', 'Streamlit', 'Ollama'],
    category: 'llm',
    featured: true,
    github: 'https://github.com/pradeep-ramola/ai-native-delivery-control-tower',
  },
];
