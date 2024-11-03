import '../styles/container/TecnologiesCounter.css';

export const TecnologiesCounter = () => {
  return (
    <div className="tecnologies-counter">
        <div className="tecnologies-container">
            <div className="tecnologie">
                <div style={{ fontSize:30, color: 'var(--green-color-100)'}}>4</div>
                <div>Lenguajes de programación</div>
            </div>
            <div className="tecnologie">
                <div style={{ fontSize:30, color: 'var(--green-color-100)'}}>4</div>
                <div>Herramientas de desarollo</div>
            </div>
            <div className="tecnologie">
                <div style={{ fontSize:30, color: 'var(--green-color-100)'}}>1</div>
                <div>Años de experiencia</div>
            </div>
        </div>
    </div>
  )
}
