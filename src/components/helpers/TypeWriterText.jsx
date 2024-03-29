import React from 'react'
import Typewriter from 'typewriter-effect'

const TypeWriterText = () => {
  return (
    <>
      <h1 className="title">
        {`Hi I'm Juaneque Full Stack Developer`}
        <br/>With background in:
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(`<span class="text-1">React JS</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">Ruby On Rails</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-4">Mentoring</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
          }}
        />
      </h1>
    </>
  )
}

export default TypeWriterText
