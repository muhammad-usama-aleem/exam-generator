import React from 'react';
import Filter from '../../components/filters/Filter';
import Preview from '../../components/Preview/Preview';
import Short from '../../components/Questions/Short/Short';
import './MainPage.css';
import Data from '../../Data/Data';
import {connect} from 'react-redux';




 const mapStateToProps=(state)=>({
  chapter:state.filterReducer.chapter,
  difficulty:state.filterReducer.difficulty,
  learning_goals:state.filterReducer.learning_goals,
  setLock:state.filterReducer.setLock 
 })




class MainPage extends React.Component {
    render() {
   

        return (
            <>
            <Filter   setLock={this.props.setLock} learning_goals={this.props.learning_goals} chapter={this.props.chapter} />
            <div className="row">
                <div className="column1">
                {this.props.chapter === 'LU1' ?
               
                   Data[0].LU1.questions.map(ques=>{                        
                         return   ((Object.values(ques).includes(this.props.difficulty))  )?   
                       (ques.learning_goals.map(lg=>lg.split(' ').join('')).indexOf(this.props.learning_goals.split(' ').join('') )>=0) ?
                            <Short key={Math.random()*1000/Math.random()} ques={ques} />              
                            :null         
                          : null
                          
                      })

                    :this.props.chapter === 'LU2' ?
                       Data[1].LU2.questions.map(ques=>{                
                         return   ((Object.values(ques).includes(this.props.difficulty))  )?   
                            (ques.learning_goals.map(lg=>lg.split(' ').join('')).indexOf(this.props.learning_goals.split(' ').join('') )>=0) ?
                            <Short  key={Math.random()*2000/Math.random()}  ques={ques} />              
                            :null        
                          : null
                          
                      })

                    :this.props.chapter === 'LU3' ?
                       Data[2].LU3.questions.map(ques=>{                        
                         return   ((Object.values(ques).includes(this.props.difficulty))  )?   
                       (ques.learning_goals.map(lg=>lg.split(' ').join('')).indexOf(this.props.learning_goals.split(' ').join('') )>=0) ?
                            <Short key={Math.random()*1000/Math.random()*500}  ques={ques} />              
                            :null         
                          : null
                          
                      })
                    :this.props.chapter === 'LU4' ?
                       Data[3].LU4.questions.map(ques=>{                        
                         return   ((Object.values(ques).includes(this.props.difficulty))  )?   
                       (ques.learning_goals.map(lg=>lg.split(' ').join('')).indexOf(this.props.learning_goals.split(' ').join('') )>=0) ?
                            <Short ques={ques} />              
                            :null         
                          : null                        
                      })
                     :this.props.chapter === 'LU9' ?
                       Data[4].LU9.questions.map(ques=>{                        
                         return   ((Object.values(ques).includes(this.props.difficulty))  )?   
                       (ques.learning_goals.map(lg=>lg.split(' ').join('')).indexOf(this.props.learning_goals.split(' ').join('') )>=0) ?
                            <Short key={Math.random()*1000/Math.random()*2000} ques={ques} />              
                            :null         
                          : null                        
                      })


                     :null
                  }                    
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
