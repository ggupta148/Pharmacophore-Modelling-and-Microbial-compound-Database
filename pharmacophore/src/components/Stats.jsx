import React from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faChartLine, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Stats = () => {
  return (
    <div className="bg-gray-100 py-12" id="stats">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl translate-x-8 font-serif text-blue-600 mb-12">Our Statistics</h2>
        <div className="flex flex-col md:flex-row justify-around mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:mx-4">
            <FontAwesomeIcon icon={faFlask} className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-3xl font-bold text-blue-600 mb-2">Compounds</h3>
            <p className="text-2xl text-gray-700">
              <CountUp end={1234} duration={2.5} />
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:mx-4">
            <FontAwesomeIcon icon={faChartLine} className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-3xl font-bold text-blue-600 mb-2">Bioactivities</h3>
            <p className="text-2xl text-gray-700">
              <CountUp end={567} duration={2.5} />
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:mx-4">
            <FontAwesomeIcon icon={faDatabase} className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-3xl font-bold text-blue-600 mb-2">Sources</h3>
            <p className="text-2xl text-gray-700">
              <CountUp end={89} duration={2.5} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
