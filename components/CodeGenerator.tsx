import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';

interface CodeGeneratorProps {
  associationName: string;
}

const CodeGenerator: React.FC<CodeGeneratorProps> = ({ associationName }) => {
  const [generatedCode, setGeneratedCode] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();

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

      // Guarda el código generado en el local storage relacionado con el nombre de la asociación
      const storedCodes = localStorage.getItem('associationCodes');
      const associationCodes = storedCodes ? JSON.parse(storedCodes) : {};
      associationCodes[associationName] = code;
      localStorage.setItem('associationCodes', JSON.stringify(associationCodes));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonDisabled(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, [buttonDisabled]);

  const handleRedirect = () => {
    router.push(`/Asociation/${generatedCode}`);
  };

  return (
    <div>
      <Button
        color={buttonDisabled ? 'secondary' : 'success'}
        onClick={generateCode}
        isDisabled={buttonDisabled}
        className='w-80 h-12 mt-12'
      >
        Generar Código
      </Button>
      {generatedCode && (
        <>
            <p className='mt-12'>comparte este codigo con tus vecinos para que se unan</p>

          <div className="mx-6 my-6 mt-4 rounded-lg bg-slate-900 h-36 w-96 flex justify-center content-center items-center justify-items-center mt-12">
            <p className="text-white text-6xl">{generatedCode}</p>
          </div>
          <Button
            color="primary"
            className="mt-4"
            onClick={handleRedirect}
          >
            Redirigir a la asociación creada
          </Button>
        </>
      )}
    </div>
  );
};

export default CodeGenerator;
