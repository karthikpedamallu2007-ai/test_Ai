/**
 * Backend Configuration: Supported Gemini Models
 */
const SUPPORTED_MODELS = [
  { id: 'gemini-3.5-flash-lite', name: 'Gemini 3.5 Flash-Lite', desc: 'Ultra-fast, high-throughput (Recommended default)' },
  { id: 'gemini-3.8-flash', name: 'Gemini 3.8 Flash', desc: 'Next-gen flagship intelligence' },
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', desc: 'Fast & intelligent' },
  { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash', desc: 'Multimodal speed' }
];

const DEFAULT_CONFIG = {
  model: 'gemini-3.5-flash-lite',
  temperature: 0.7,
  maxOutputTokens: 4096,
  topP: 0.95
};

module.exports = {
  SUPPORTED_MODELS,
  DEFAULT_CONFIG
};
