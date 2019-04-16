import React from 'react';
import {connect} from 'react-redux';
const SongDetails=(props)=>{
    console.log(props.song,'songsDetails')
    if(props.song){
    return <div>
        <p>Title:{props.song.title}</p>
        <p>Duration:{props.song.duration}</p>
        </div>
}else{
    return<div>Please select a Song</div>
}
}
const mapStateToProps = (state)=>{
     console.log(state.selectSong ,'songsDetails')
return {song: state.selectSong}
};
export default connect(mapStateToProps)(SongDetails)