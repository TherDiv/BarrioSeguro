import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/button';

const CodeGenerator: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const generateCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let code = '';
    let numCount = 0; // Contador de números generados
    for (let i = 0; i < 6; i++) {
      // Genera un índice aleatorio
      const randomIndex = Math.floor(Math.random() * characters.length);
      // Obtiene el carácter correspondiente al índice
      const char = characters.charAt(randomIndex);
      // Si el carácter es un número, aumenta el contador
      if ('0123456789'.includes(char)) {
        numCount++;
      }
      // Agrega el carácter al código generado
      code += char;
    }
    // Si el contador de números generados es menor que 4, llama a la función de nuevo para generar un nuevo código
    if (numCount < 3) {
      generateCode();
    } else {
      // Si se generan al menos 4 números, establece el código generado y deshabilita el botón
      setGeneratedCode(code);
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonDisabled(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, [buttonDisabled]);

  return (
    <div>
      <Button
        color={buttonDisabled ? 'secondary' : 'success'}
        onClick={generateCode}
        isDisabled={buttonDisabled}
      >
        Generar Código
      </Button>
      {generatedCode && (
        <div className="mx-6 my-6 rounded-lg bg-slate-900 h-36 w-96 flex justify-center content-center items-center justify-items-center mt-12">
          <p className="text-white text-6xl">{generatedCode}</p>
        </div>
      )}
    </div>
  );
};

export default CodeGenerator;
