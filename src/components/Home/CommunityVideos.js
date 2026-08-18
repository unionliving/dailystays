import React from 'react';

const CommunityVideos = () => {
  return (
    <div className="w-full bg-[#f0f1f1] py-20 lg:py-32 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="mb-12 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-[HelveticaWorldRegular] tracking-tight text-gray-900 mb-6">
            Latest Stories
          </h2>
          <div className="w-12 h-px bg-black"></div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Video */}
          <div className="lg:col-span-2">
            <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden bg-black shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Main Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Side Videos */}
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4 items-center group cursor-pointer">
                <div className="relative w-[40%] aspect-video bg-black rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    src={"https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"}
                    title={"Story "}
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="w-[60%] flex flex-col justify-center">
                  <div className="h-4 w-3/4 bg-gray-300 rounded mb-2 group-hover:bg-gray-400 transition-colors"></div>
                  <div className="h-3 w-1/2 bg-gray-200 rounded group-hover:bg-gray-300 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default CommunityVideos;
