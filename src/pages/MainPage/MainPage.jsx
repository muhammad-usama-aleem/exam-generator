import React from 'react';
import Filter from '../../components/filters/Filter';
import Preview from '../../components/Preview/Preview';
import Short from '../../components/Questions/Short/Short';
import './MainPage.css';
import {connect} from 'react-redux';





 const mapStateToProps=(state)=>({
  chapter:state.filterReducer.chapter,
  difficulty:state.filterReducer.difficulty,
  learning_goals:state.filterReducer.learning_goals,
  setLock:state.filterReducer.setLock 
 })


class MainPage extends React.Component {
  // constructor(props)
  // {
  //     super(props);
  //     this.state={
  //         chapter:'None',
  //         difficulty:'',
  //         learning_goals:'',
  //         setLock:[1,1]
  //     }

  // }
   
   setFilterValues=(chapter,difficulty,learning_goals)=>
   {
     //   console.log(chapter,difficulty,learning_goals)
     //   if(chapter && chapter!=='None')
     //   {    
     //       if(this.state.setLock.every(item=>item===1))
     //       {
     //        this.setState({...this.state,chapter,setLock:[0,1]})
     //       }else {
     //           this.setState({...this.state,chapter})
     //       }

     //   }
     //    else if(difficulty && chapter!=='None')
     //    {
     //        if(this.state.setLock.some(item=>item===1) && difficulty!=='None')
     //        {
     //         this.setState({...this.state,difficulty,setLock:[0,0]});
     //        }else {
     //          this.setState({...this.state,difficulty})  
     //        } 

              
     //    }
     //    else if(learning_goals && chapter!=='None')
     //    {
     //        this.setState({...this.state,learning_goals});
     //    }
     //    else if(chapter==='None')
     //    {
     //         this.setState({difficulty:'',chapter:'None',learning_goals:'',setLock:[1,1]}); 
     //    }
    
     // setTimeout(()=>{ console.log(this.state)},2000 )
      
   }


    render() {
     console.log(this.props.chapter,this.props.learning_goals,this.props.difficulty,this.props.setLock,'c,lg,d,sl');


        return (
            <>
            <Filter   setLock={this.props.setLock} learning_goals={this.props.learning_goals} chapter={this.props.chapter} />
            <div className="row">
                <div className="column1">
                    <Short/>                
                </div>
                <div className="column2">   
                    <Preview/>   
                </div>
            </div>
            </>
        )
  }
}

export default connect(mapStateToProps,null)(MainPage);
