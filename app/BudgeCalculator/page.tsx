"use client"
import { SetStateAction, useState } from 'react';
import { Footer } from '@/components/Footer';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'; // Importar iconos de react
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";


export default function BudgeCalculatorPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = useState("auto");


  const [numVecinos, setNumVecinos] = useState(0);
  const [numTesoreros, setNumTesoreros] = useState(0);
  const [numVigilantes, setNumVigilantes] = useState(0);
  const [numVehiculos, setNumVehiculos] = useState(0);
  const [numCaseta, setNumCaseta] = useState(0);
  const [numCamaras, setNumCamaras] = useState(0);
  const [numRejas, setNumRejas] = useState(0);

  const handleDecrease = (setter: { (value: SetStateAction<number>): void; (arg0: (prevValue: any) => number): void; }) => {
    setter((prevValue) => prevValue > 0 ? prevValue - 1 : 0);
  };

  const handleIncrease = (setter: { (value: SetStateAction<number>): void; (arg0: (prevValue: any) => any): void; }) => {
    setter((prevValue) => prevValue + 1);
  };

  const handleCalculate = () => {
    // Aquí puedes agregar la lógica de cálculo del presupuesto
    // Utiliza los valores de estado numVecinos, numTesoreros, etc.
    console.log('Calculating budget...');
    onOpen()
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Footer text='Presupuesto'></Footer>


      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2 gap-12 justify-between w-80">
          <span className='text-xl'>Nro de Vecinos:</span>
          <div className="flex gap-2 bg-slate-400 items-center">
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumVecinos)}>
              <HiMinusSm />

            </div>
            <span className='text-xl px-4'>{numVecinos}</span>
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumVecinos)}>
              <HiPlusSm />
            </div>
          </div>

        </div>
        {/* Repite este patrón para los otros campos de entrada */}
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center mb-2 gap-12 justify-between w-80">
          <span className='text-xl'>Nro de Tesoreros:</span>
          <div className="flex gap-2 bg-slate-400 items-center">
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumTesoreros)}>
              <HiMinusSm />

            </div>
            <span className='text-xl px-4'>{numTesoreros}</span>
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumTesoreros)}>
              <HiPlusSm />
            </div>
          </div>

        </div>
        {/* Repite este patrón para los otros campos de entrada */}
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center mb-2 gap-12 justify-between w-80">
          <span className='text-xl'>Nro de Vigilantes:</span>
          <div className="flex gap-2 bg-slate-400 items-center">
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumVigilantes)}>
              <HiMinusSm />

            </div>
            <span className='text-xl px-4'>{numVigilantes}</span>
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumVigilantes)}>
              <HiPlusSm />
            </div>
          </div>

        </div>
        {/* Repite este patrón para los otros campos de entrada */}
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center mb-2 gap-12 justify-between w-80">
          <span className='text-xl'>Nro de Vehiculos de Vigilancia:</span>
          <div className="flex gap-2 bg-slate-400 items-center">
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumVehiculos)}>
              <HiMinusSm />

            </div>
            <span className='text-xl px-4'>{numVehiculos}</span>
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumVehiculos)}>
              <HiPlusSm />
            </div>
          </div>

        </div>
        {/* Repite este patrón para los otros campos de entrada */}
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center mb-2 gap-12 justify-between w-80">
          <span className='text-xl'>Nro de Casetas de Vigilancia:</span>
          <div className="flex gap-2 bg-slate-400 items-center">
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumCaseta)}>
              <HiMinusSm />

            </div>
            <span className='text-xl px-4'>{numCaseta}</span>
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumCaseta)}>
              <HiPlusSm />
            </div>
          </div>

        </div>
        {/* Repite este patrón para los otros campos de entrada */}
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center mb-2 gap-12 justify-between w-80">
          <span className='text-xl'>Nro de Camaras de Vigilancia:</span>
          <div className="flex gap-2 bg-slate-400 items-center">
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumCamaras)}>
              <HiMinusSm />

            </div>
            <span className='text-xl px-4'>{numCamaras}</span>
            <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumCamaras)}>
              <HiPlusSm />
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center mb-2 gap-12 justify-between w-80">
            <span className='text-xl'>Nro de Rejas:</span>
            <div className="flex gap-2 bg-slate-400 items-center">
              <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumRejas)}>
                <HiMinusSm />

              </div>
              <span className='text-xl px-4'>{numRejas}</span>
              <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumRejas)}>
                <HiPlusSm />
              </div>
            </div>

          </div>
          {/* Repite este patrón para los otros campos de entrada */}
        </div>
      </div>

      <Button color="success" className="mt-12 mb-2 px-24 py-8 " onClick={handleCalculate}>
        <p className="text-xl">
          Calcular
        </p>
      </Button>
      <div className="flex flex-col gap-2">
        <Modal
          isOpen={isOpen}
          placement={modalPlacement}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                  <p> <b>Pago Mensual:</b> 5000 Soles</p>
                  <p> <b>Rejas:</b> 4000 Soles</p>
                  <p> <b>Garitas:</b> 8000 Soles</p>
                  <p> <b>Sueldos:</b> 1000 Soles</p>
                  <p> <b>Trámites:</b> 50 Soles</p>
                  <p> <b>PRESUPUESTO TOTAL:</b> 8000 Soles</p>


                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Copiar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
