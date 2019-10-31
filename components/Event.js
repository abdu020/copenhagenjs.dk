import React from 'react'
import Map from './Map'
import SpeakerSchedule from './SpeakerSchedule.js'

export default ({ title, date, html, location, speakers }) => {
  return (
    <div>
      <style jsx>{`
        .date {
          font-size: 1.5rem;
        }
        .description {
        }
        .description :global(img) {
          max-width: 100%;
        }
        .description :global(h1) {
          margin: 5px 0;
        }
        .speaker-schedule {
          margin: 10px 0;
        }
      `}</style>
      <div className="date">{date && date.toLocaleString('da-DK')}</div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      {speakers ? (
        <div class="speaker-schedule">
          <SpeakerSchedule speakers={speakers} />
        </div>
      ) : (
        ''
      )}
      {location ? <Map location={location} /> : ''}
    </div>
  )
}
