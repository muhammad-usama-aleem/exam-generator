import React from 'react';
import './Finalize.css';



const Finalize = ({chapter}) => {
    return (
    <>
		<div className="parent" >
			<h1 className="chapter">Lernkontrolle {chapter}</h1>
			<div className="combination">
				<div className="items-allowed">
					<p className="list_header">Hilfsmittel:</p>
					<ul className="items_list">
						<li>
							<label className='label'>Rechner</label>
							<input type='checkbox' name='Rencher'/>
						</li>
						<li>
							<label className='label'>Formelsammlung</label>
							<input type='checkbox' name='Formelsammlung'/>
						</li>
						<li>
							<label className='label'>Lineal</label>
							<input type='checkbox' name='Lineal'/>
						</li>
						<li>
							<label className='label'>Geodreieck</label>
							<input type='checkbox' name='Geodreieck'/>
						</li>
						<li>
							<label className='label'>Zirkel</label>
							<input type='checkbox' name='Zirkel'/>
						</li>
					</ul>
				</div>
				<div className="details">
					<p className='details-text'>Name:</p>
					<p className='details-text'>Note:</p>				
					<p className='details-text'>Erreichte Punkte:</p> 					
					<p className='details-text'>Unterschrift der Eltern:</p>		
				</div>
				</div>
			<table>
				<thead>
					<tr>
					<th scope="col">Maximum</th>
					<th scope="col">6</th>
					<th scope="col">5</th>
					<th scope="col">4</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td data-label="Maximum">Visa - 3412</td>
					<td data-label="6">04/01/2016</td>
					<td data-label="5">$1,190</td>
					<td data-label="4">03/01/2016 - 03/31/2016</td>
					</tr>
				</tbody>
			</table>
		</div>
	</>

    )

}

export default Finalize;