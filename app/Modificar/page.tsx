import { Footer } from '@/components/Footer';
import Staff from '@/components/Staff';

export default function SecurityPage() {
  const staffList = [
    { names: 'Jim Bryan', lastNames: 'Segovia Valencia', phone: '956234167', position: 'Vecino' },
    { names: 'Juan Perez', lastNames: 'Mercedez', phone: '912645566', position: 'Guardia' },
    { names: 'Enrique Jean', lastNames: 'Mamni', phone: '952245566', position: 'Guardia' },
    { names: 'Noemí Claudia', lastNames: 'Quispe', phone: '911164566', position: 'Guardia' },
    { names: 'Jaime Lora', lastNames: 'Chupivilcas', phone: '912855556', position: 'Guardia' },
    { names: 'Pedro', lastNames: 'Gonzalez Ruiz', phone: '912345678', position: 'Vecino' },
    { names: 'Ana', lastNames: 'Martinez Lopez', phone: '912345679', position: 'Vecino' },
    { names: 'Luis', lastNames: 'Garcia Perez', phone: '912345680', position: 'Vecino' },
    { names: 'Miguel', lastNames: 'Ramirez Cruz', phone: '912345681', position: 'Vecino' },
    { names: 'Elena', lastNames: 'Hernandez Sanchez', phone: '912345682', position: 'Vecino' },
    { names: 'Javier', lastNames: 'Jimenez Ortiz', phone: '912345683', position: 'Vecino' },
    { names: 'Marta', lastNames: 'Sanchez Flores', phone: '912345684', position: 'Vecino' },
    { names: 'Carlos', lastNames: 'Lopez Diaz', phone: '912345685', position: 'Vecino' },
    { names: 'Lucia', lastNames: 'Alvarez Gutierrez', phone: '912345686', position: 'Vecino' },
    { names: 'Roberto', lastNames: 'Fernandez Romero', phone: '912345687', position: 'Vecino' },
    { names: 'Laura', lastNames: 'Moreno Vazquez', phone: '912345688', position: 'Vecino' },
    { names: 'David', lastNames: 'Gomez Ruiz', phone: '912345689', position: 'Vecino' },
    { names: 'Sara', lastNames: 'Martinez Sanchez', phone: '912345690', position: 'Vecino' },
    { names: 'Daniel', lastNames: 'Perez Lopez', phone: '912345691', position: 'Vecino' },
    { names: 'Natalia', lastNames: 'Garcia Fernandez', phone: '912345692', position: 'Vecino' },
    { names: 'Diego', lastNames: 'Rodriguez Gomez', phone: '912345693', position: 'Vecino' },
    { names: 'Patricia', lastNames: 'Martinez Hernandez', phone: '912345694', position: 'Vecino' },
    { names: 'Sergio', lastNames: 'Lopez Garcia', phone: '912345695', position: 'Vecino' },
    { names: 'Alicia', lastNames: 'Gomez Rodriguez', phone: '912345696', position: 'Vecino' },
    { names: 'Francisco', lastNames: 'Sanchez Martinez', phone: '912345697', position: 'Vecino' },
    { names: 'Andrea', lastNames: 'Diaz Lopez', phone: '912345698', position: 'Vecino' },
    { names: 'Fernando', lastNames: 'Martinez Gomez', phone: '912345699', position: 'Vecino' },
    { names: 'Cristina', lastNames: 'Garcia Sanchez', phone: '912345700', position: 'Vecino' },
    { names: 'Raul', lastNames: 'Perez Fernandez', phone: '912345701', position: 'Vecino' },
    { names: 'Pablo', lastNames: 'Lopez Garcia', phone: '912345702', position: 'Vecino' },
    { names: 'Rosa', lastNames: 'Sanchez Martinez', phone: '912345703', position: 'Vecino' },
    { names: 'Oscar', lastNames: 'Diaz Rodriguez', phone: '912345704', position: 'Vecino' },
    { names: 'Beatriz', lastNames: 'Garcia Fernandez', phone: '912345705', position: 'Vecino' },
    { names: 'Isabel', lastNames: 'Martinez Hernandez', phone: '912345706', position: 'Vecino' },
    { names: 'Jose', lastNames: 'Rodriguez Sanchez', phone: '912345707', position: 'Vecino' },
    { names: 'Claudia', lastNames: 'Perez Gomez', phone: '912345708', position: 'Vecino' },
    { names: 'Adrian', lastNames: 'Sanchez Martinez', phone: '912345709', position: 'Vecino' },
    { names: 'Sofia', lastNames: 'Garcia Diaz', phone: '912345710', position: 'Vecino' },
    { names: 'Jesus', lastNames: 'Martinez Garcia', phone: '912345711', position: 'Vecino' },
    { names: 'Monica', lastNames: 'Lopez Fernandez', phone: '912345712', position: 'Vecino' },
    { names: 'Alberto', lastNames: 'Garcia Martinez', phone: '912345713', position: 'Vecino' },
    { names: 'Irene', lastNames: 'Sanchez Diaz', phone: '912345714', position: 'Vecino' },
    { names: 'Mario', lastNames: 'Rodriguez Lopez', phone: '912345715', position: 'Vecino' },
    { names: 'Laura', lastNames: 'Garcia Perez', phone: '912345716', position: 'Vecino' },
    { names: 'Manuel', lastNames: 'Martinez Fernandez', phone: '912345717', position: 'Vecino' },
    { names: 'Victoria', lastNames: 'Lopez Garcia', phone: '912345718', position: 'Vecino' },
    { names: 'Hugo', lastNames: 'Garcia Martinez', phone: '912345719', position: 'Vecino' },
    { names: 'Ines', lastNames: 'Sanchez Rodriguez', phone: '912345720', position: 'Vecino' },
    { names: 'Guillermo', lastNames: 'Perez Garcia', phone: '912345721', position: 'Vecino' },
    { names: 'Rafael', lastNames: 'Martinez Lopez', phone: '912345722', position: 'Vecino' },
    { names: 'Carmen', lastNames: 'Garcia Sanchez', phone: '912345723', position: 'Vecino' },
    { names: 'Lucas', lastNames: 'Lopez Rodriguez', phone: '912345724', position: 'Vecino' },
    { names: 'Miriam', lastNames: 'Sanchez Fernandez', phone: '912345725', position: 'Vecino' },
    { names: 'Marcos', lastNames: 'Garcia Perez', phone: '912345726', position: 'Vecino' },
    { names: 'Cecilia', lastNames: 'Rodriguez Martinez', phone: '912345727', position: 'Vecino' },
    { names: 'Jorge', lastNames: 'Perez Sanchez', phone: '912345728', position: 'Vecino' },
    { names: 'Sandra', lastNames: 'Garcia Lopez', phone: '912345729', position: 'Vecino' },
    { names: 'Tomás', lastNames: 'Sanchez Fernandez', phone: '912345730', position: 'Vecino' },
    { names: 'Alejandro', lastNames: 'Lopez Garcia', phone: '912345731', position: 'Vecino' },
    { names: 'Paula', lastNames: 'Garcia Martinez', phone: '912345732', position: 'Vecino' },
    { names: 'Federico', lastNames: 'Perez Rodriguez', phone: '912345733', position: 'Vecino' },
    { names: 'Raquel', lastNames: 'Sanchez Garcia', phone: '912345734', position: 'Vecino' },
    { names: 'Ricardo', lastNames: 'Garcia Martinez', phone: '912345735', position: 'Vecino' },
    { names: 'Lorena', lastNames: 'Lopez Sanchez', phone: '912345736', position: 'Vecino' },
    { names: 'Gabriel', lastNames: 'Sanchez Garcia', phone: '912345737', position: 'Vecino' },
    { names: 'Silvia', lastNames: 'Garcia Rodriguez', phone: '912345738', position: 'Vecino' },
    { names: 'Julian', lastNames: 'Perez Fernandez', phone: '912345739', position: 'Vecino' },
    { names: 'Lourdes', lastNames: 'Sanchez Garcia', phone: '912345740', position: 'Vecino' },
    { names: 'Andres', lastNames: 'Garcia Martinez', phone: '912345741', position: 'Vecino' },
    { names: 'Pilar', lastNames: 'Lopez Sanchez', phone: '912345742', position: 'Vecino' },
    { names: 'Esteban', lastNames: 'Sanchez Garcia', phone: '912345743', position: 'Vecino' },
    { names: 'Gloria', lastNames: 'Garcia Rodriguez', phone: '912345744', position: 'Vecino' },
    { names: 'Cesar', lastNames: 'Perez Fernandez', phone: '912345745', position: 'Vecino' },
    { names: 'Violeta', lastNames: 'Sanchez Garcia', phone: '912345746', position: 'Vecino' },
    { names: 'Oscar', lastNames: 'Garcia Martinez', phone: '912345747', position: 'Vecino' },
    { names: 'Teresa', lastNames: 'Lopez Sanchez', phone: '912345748', position: 'Vecino' },
    { names: 'Eduardo', lastNames: 'Sanchez Garcia', phone: '912345749', position: 'Vecino' },
    { names: 'Belen', lastNames: 'Garcia Rodriguez', phone: '912345750', position: 'Vecino' },
    { names: 'Antonio', lastNames: 'Perez Fernandez', phone: '912345751', position: 'Tesorero' },
    { names: 'Rocío', lastNames: 'Sanchez Garcia', phone: '912345752', position: 'Tesorero' },
    { names: 'Felipe', lastNames: 'Garcia Martinez', phone: '912345753', position: 'Presidente de la Asociación' },
    { names: 'Marina', lastNames: 'Lopez Sanchez', phone: '912345754', position: 'Coordinador' },
  ];

  return (
    <>
      <Footer text={'Lista de Vecinos'} />
      <div className="flex justify-center flex-col gap-12">
        {staffList.map((staff, index) => (
          <Staff 
            key={index}
            names={staff.names}
            lastNames={staff.lastNames}
            phone={staff.phone}
            position={staff.position}
          />
        ))}
      </div>
    </>
  );
}
