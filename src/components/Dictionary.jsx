import { electronics } from './list.jsx'
import { cocina } from './domestic.jsx';
function Dictionary() {

    const tipo = electronics.filter(electronics => electronics.tipo == 'Smartphone');
    const domestico = cocina.filter(cocina => cocina.domestico == 'refrigerador');


    const lista = tipo.map(electronics =>
        <li>
            <p >
                <b>
                    {electronics.sku};
                </b>
                {'' + electronics.nombre + ' '}
                {'' + electronics.descripcion + ' '}
                {'' + electronics.ram + ' '}
                {'' + electronics.precio + ' '}

            </p>
        </li>

    );


    const list = domestico.map(dom =>
        <li>
            <p>
                <b>
                    {dom.sku}
                </b>
                {'' + dom.nombre + ' '}
                {'' + dom.descripcion + ' '}
                {'' + dom.precio + ' '}
                {'' + dom.color + ' '}


            </p>
        </li>
    );



    return (
        <>
            <p>Electrónicos</p>

            <div>
                <ul className='p-5'>
                    {lista}
                </ul>
            </div>


            <p>Cocina</p>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </>
    )

}

export default Dictionary;