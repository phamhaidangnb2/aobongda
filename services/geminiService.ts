import { GoogleGenAI, ChatSession } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

let chatSession: ChatSession | null = null;

export const initializeChat = async (): Promise<ChatSession> => {
  if (chatSession) return chatSession;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    chatSession = chat;
    return chat;
  } catch (error) {
    console.error("Error initializing Gemini chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = await initializeChat();
    const result = await session.sendMessage({ message });
    return result.text || "Xin lỗi, tôi đang gặp sự cố kết nối. Vui lòng thử lại sau.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Hiện tại hệ thống đang bận, bạn vui lòng thử lại sau nhé!";
  }
};
