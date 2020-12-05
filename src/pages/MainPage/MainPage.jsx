import React from 'react';
import Filter from '../../components/filters/Filter';
import Preview from '../../components/Preview/Preview';
import Short from '../../components/Questions/Short/Short';
import './MainPage.css';

class MainPage extends React.Component {
  constructor(props)
  {
      super(props);
      this.state={
          chapter:'None',
          difficulty:'',
          learning_goals:'',
          setLock:[1,1]
      }

  }
   
   setFilterValues=(chapter,difficulty,learning_goals)=>
   {
       console.log(chapter,difficulty,learning_goals)
       if(chapter && chapter!=='None')
       {    
           if(this.state.setLock.every(item=>item===1))
           {
            this.setState({...this.state,chapter,setLock:[0,1]})
           }else {
               this.setState({...this.state,chapter})
           }

       }
        else if(difficulty && chapter!=='None')
        {
            if(this.state.setLock.some(item=>item===1) && difficulty!=='None')
            {
             this.setState({...this.state,difficulty,setLock:[0,0]});
            }else {
              this.setState({...this.state,difficulty})  
            } 

              
        }
        else if(learning_goals && chapter!=='None')
        {
            this.setState({...this.state,learning_goals});
        }
        else if(chapter==='None')
        {
             this.setState({difficulty:'',chapter:'None',learning_goals:'',setLock:[1,1]}); 
        }
    
     setTimeout(()=>{ console.log(this.state)},2000 )
      
   }

    render() {
        return (
            <>
            <Filter setValues={this.setFilterValues}  setLock={this.state.setLock} chapter={this.state.chapter} />
            <div className="row">
                <div className="column1">
                    <Short />                
                </div>
                <div className="column2">   
                    <Preview />   
                </div>
            </div>
            </>
        )
    }
}

export default MainPage;
