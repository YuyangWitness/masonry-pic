import React from 'react';
import PicPreview from '@components/picPreview';


export default class PicWaterFall extends React.Component {
  state = {
    visible: false,
    requirePic: null
  }

  hideModal = () => {
    this.setState({
      visible: false,
      requirePic: null
    });
  }
 

  showModal = pic => {
    this.setState({
      visible: true,
      requirePic: pic
    });
  }
  render() {  
    const pictures = this.props.pictures || [];
    return (
      <div className='grid'>
        {
          pictures.map((pic, index) => {
            return (
              <div key={index} className='grid-item' onClick={() => { this.showModal(pic) }}>
                <img src={`http://localhost:3000${pic}`} alt=""/>
                {/* <img src={pic} alt=""/> */}
              </div>
            )}
          ) 
        }
        {/* <div className='grid-item'>
          <img src={require('./../asserts/p1.jpg')} onClick={() => { this.showModal() }}/>
        </div> <div className='grid-item' >
          <img src={require('./../asserts/p2.jpg')} onClick={() => { this.showModal() }}/>
        </div> <div className='grid-item'>
          <img src={require('./../asserts/p3.jpg')} onClick={() => { this.showModal() }}/>
        </div> <div className='grid-item' >
          <img src={require('./../asserts/p4.jpg')} onClick={() => { this.showModal() }}/>
        </div> <div className='grid-item'>
          <img src={require('./../asserts/p5.jpg')} onClick={() => { this.showModal() }}/>
        </div> */}
        
        {this.state.visible ? <PicPreview close={this.hideModal} pic={`http://localhost:3000${this.state.requirePic}`} /> : '' }
      </div>
    )
  }
}