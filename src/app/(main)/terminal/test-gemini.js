const { GoogleGenerativeAI } = require('@google/generative-ai');

const API_KEY = 'AIzaSyDtyhvEhb8GDcVaX-DTMcWAkL7r69GDizE';

async function testGeminiAPI() {
  try {
    console.log('Testing Gemini API...');
    
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Try different model names
    const models = ['gemini-1.5-pro', 'gemini-1.5-flash', 'gemini-pro'];
    
    for (const modelName of models) {
      try {
        console.log(`\nTrying model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        
        const result = await model.generateContent('Hello, can you respond with "API is working" if you can see this message?');
        const response = await result.response;
        const text = response.text();
        
        console.log('✅ API Response:', text);
        console.log(`✅ Gemini API is working with model: ${modelName}`);
        return modelName; // Return the working model name
        
      } catch (error) {
        console.log(`❌ Model ${modelName} failed:`, error.message);
      }
    }
    
    console.log('\n❌ All models failed. Please check your API key and permissions.');
    
  } catch (error) {
    console.error('❌ API Error:', error.message);
    console.error('Full error:', error);
  }
}

testGeminiAPI(); 