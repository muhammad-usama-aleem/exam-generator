import React from 'react';
import './Finalize.css';
import {connect} from 'react-redux';
import {checkFifty,checkSixty,checkFormel,checkSelbstdefiniert} from '../../Redux/Actions/finalizeActions'; 


const mapStateToProps=(state)=>({
fifty:state.finalizeReducer.fifty,
sixty:state.finalizeReducer.sixty,
formel: state.finalizeReducer.formel,
selbstdefiniert:state.finalizeReducer.selbstdefiniert,
setLock:state.finalizeReducer.setLock,
chapter:state.filterReducer.chapter
})


const mapDispatchToProps=(dispatch)=>({

trueFifty:(val)=>dispatch(checkFifty(val)),
trueSixty: (val)=>dispatch(checkSixty(val)),
trueFormel:  (val)=>dispatch(checkFormel(val)),
trueSelbstdefiniert:(val)=>dispatch(checkSelbstdefiniert(val))

})


const Finalize = ({chapter,fifty,sixty,formel,selbstdefiniert,trueFifty,trueSixty,trueFormel,trueSelbstdefiniert,setLock}) => {

function checkIfChecked(event)
{
	if(event.target.checked)
	{
		if(event.target.name==='fifty')
		{
         trueFifty(true)

		}else if(event.target.name==='sixty')
		{
         trueSixty(true)
		}else if(event.target.name==='formel')
		{
         trueFormel(true)
		}else if(event.target.name==='selbstdefiniert')
		{
         trueSelbstdefiniert(true)
		}

	}
	else
	{
		if(event.target.name==='fifty')
		{
         trueFifty(false)

		}else if(event.target.name==='sixty')
		{
         trueSixty(false)
		}else if(event.target.name==='formel')
		{
         trueFormel(false)
		}else if(event.target.name==='selbstdefiniert')
		{
         trueSelbstdefiniert(false)
		}
		
	}

}

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
				<tbody>
					<tr>
					<td >50%</td>
					<td ><input  name="fifty" disabled={setLock[0]} type="checkbox" onClick={checkIfChecked}/></td>
					</tr>
					<tr>
					<td >60%</td>
					<td ><input  disabled={setLock[1]} name="sixty" type="checkbox"  onClick={checkIfChecked} /></td>
					</tr>
					<tr>
					<td >Formel</td>
					<td ><input   disabled={setLock[2]} name="formel" type="checkbox" onClick={checkIfChecked} /></td>
					</tr>
					<tr>
					<td >Selbstdefiniert</td>
					<td ><input   disabled={setLock[3]} name="selbstdefiniert" type="checkbox" onClick={checkIfChecked} /></td>
					</tr>
					
				</tbody>
				</table>
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
					<td data-label="Maximum">data to get</td>
					<td data-label="6">{fifty?'90%':sixty?'94%':formel?'95%':selbstdefiniert?<input className='set_values' type='text'/>:null}</td>
					<td data-label="5">{fifty?'70%':sixty?'77%':formel?'75%':selbstdefiniert?<input className='set_values' type='text'/>:null}</td>
					<td data-label="4">{fifty?'50%':sixty?'60%':formel?'55%':selbstdefiniert?<input  className='set_values' type='text'/>:null}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</>

    )

}

export default connect(mapStateToProps,mapDispatchToProps)(Finalize);