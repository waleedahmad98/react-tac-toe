import React, { useState } from 'react';
import Box from './Box';
export default function Board() {
    const [tl, setTl] = useState("") // state for top left box
    const [tm, setTm] = useState("")
    const [tr, setTr] = useState("")
    const [ml, setMl] = useState("")
    const [mm, setMm] = useState("")
    const [mr, setMr] = useState("")
    const [bl, setBl] = useState("")
    const [bm, setBm] = useState("")
    const [br, setBr] = useState("")
    return (
        <div>
            <div className='row'>
                <div className='col-4'>
                    <Box value={tl} setValue = {setTl} />
                </div>
                <div className='col-4'>
                    <Box value={tm} setValue = {setTm} />
                </div>
                <div className='col-4'>
                    <Box value={tr} setValue = {setTr} />
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <Box value={ml} setValue = {setMl} />
                </div>
                <div className='col-4'>
                    <Box value={mm} setValue = {setMm} />
                </div>
                <div className='col-4'>
                    <Box value={mr} setValue = {setMr} />
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <Box value={bl} setValue = {setBl} />
                </div>
                <div className='col-4'>
                    <Box value={bm} setValue = {setBm} />
                </div>
                <div className='col-4'>
                    <Box value={br} setValue = {setBr} />
                </div>
            </div>
        </div>);
}
