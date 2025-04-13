import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
}

export default function HistoryPage() {
  const events: TimelineEvent[] = [
    {
      date: 'August 2020',
      title: 'Dans mon jardin',
      description: 'Once upon a time..une boite en carton arriva devant chez moi. Cette boite semblait assez normale, mais elle contenait un petit message et un petit paquet. Le message était simple : "Je suis chouchou, fait moi des gratous". Je ne savais pas quoi faire, alors j\'ouvris la boite. Et là, un chouchou m\'attendait.',
      images: ['/images/chou8.jpg', '/images/chou16.jpg', '/images/chou18.jpg',]
    },
    {
      date: 'August 2024',
      title: 'Retrouver le chouchou perdu',
      description: 'Apres avoir accueillie le chouchou chez moi, il a disparu. Pendant 4 longues annees, je cherchais a trouver le chouchou perdu. Je chercha dans le monde entier, sans relache. Mais je n\'ai pas abandonne l\'affaire. C\'est finallement a Seoul en Coree du Sud que je le retrouvai.',
      images: ['/images/chou9.jpg', '/images/chou14.jpg', '/images/chou42.jpg', ]
    },
    {
      date: 'September 2024',
      title: 'Le chouchou me ramene a Jeju',
      description: 'Lorsque je retrouvai le chouchou, il me demandait de l\'accompagner a Jeju. Je ne savais pas quoi faire, alors j\'ai accepte. Je suis allée a Jeju, et j\'ai rencontré le chouchou et tout ses copains de chouchouland.',
      images: ['/images/chou37.jpg', '/images/chou38.jpg', '/images/chou20.jpg', '/images/chou40.jpg', '/images/chou41.jpg']
    },
    {
      date: 'October 2024',
      title: 'Halloween religieux',
      description: 'Pretre et nonne, j\'ai ete baptisee en l\'honneur de la saint-chouchou. Je suis devenue une chouchou aussi.',
      images: ['/images/chou3.jpg', '/images/chou47.jpg', '/images/chou48.jpg', '/images/chou49.jpg']
    },
    {
      date: 'November 2024',
      title: 'Parcourir des montagnes en esperant que Everest soit aussi facile et le Japon avec les chouchous',
      description: 'Apres avoir ete baptisee en tant que chouchou, j\' ete envoyee a la montagne Bukhasan et ensuite la tribue des chouchous m\'a kidnapee au Japon.',
      images: ['/images/chou4.jpg', '/images/chou5.jpg', '/images/chou6.jpg', '/images/chou7.jpg', '/images/chou39.jpg']
    },
    {
      date: 'December 2024',
      title: 'Noel sans chouchou',
      description: 'Pour repartir voir sa famille, le chouchou part pour le Cambodge. Mais avant de partir, nous avons fait notre propre voyage en Thailande.',
      images: ['/images/chou10.jpg', '/images/chou11.jpg', '/images/chou12.jpg', '/images/chou13.jpg', '/images/chou17.jpg']
    },
    {
      date: 'January 2025',
      title: 'Les chouchous deviennent buddhistes et communistes',
      description: 'Le chouchou voyage autour de l\'Asie et nous nous rejoignons a Bangkok. Nos aventures continuent en Thailande et au Vietnam. En rendant visite a des temples buddhistes en Thailande, nous nous sommes convertis au buddhisme. Ensuite, nous avons ete indoctrines par le communisme au Vietnam lors de notre decouverte de Hiagiang au nord.',
      images: ['/images/chou17.jpg', '/images/chou25.jpg', '/images/chou26.jpg', '/images/chou27.jpg', '/images/chou30.jpg', '/images/chou31.jpg']
    },
    {
      date: 'February 2025',
      title: 'Aurevoir et rebonjour',
      description: 'Retour a Seoul, le chouchou dit ses aurevoirs et repars en France. Une tristesse enorme mais qui ne dure que quelques semaines car nous nous retrouvons a nouveau a Paris.',
      images: ['/images/chou15.jpg', '/images/chou22.jpg', '/images/chou23.jpg']
    },
    {
      date: 'March 2025',
      title: 'Chouchou in Paris',
      description: 'J\'arrive a Chouchouland et je decouvre le monde de chouchou. J\'ai eu l\'occasion de rencontrer la famille chouchou et de decouvrir les secrets de chouchouland.',
      images: ['/images/chou34.jpg', '/images/chou35.jpg', '/images/chou36.jpg', '/images/chou44.jpg', '/images/chou45.jpg']
    },
    {
      date: 'April 2025',
      title: 'Looking Forward',
      description: 'J\'ai adore chouchouland car j\'ai pu passer beacoup de temps avec chouchou. Maintenant, de retour a Seoul, j\'ai hate de commencer des nouvelles aventures et  passer cet ete avec ce petit chouchou que j\'ai une fois trouver dans une boite en carton.',
      images: ['/images/chou19.jpg', '/images/chou33.jpg', '/images/chou32.jpg', ]
    }
  ];

  return (
    <>
      <Head>
        <title>History of the Chouchous</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-red-500 p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/main" className="text-white mb-6 inline-flex items-center hover:text-pink-300">
            <FaArrowLeft className="mr-2" /> Back to Main
          </Link>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h1 className="text-white text-3xl font-bold mb-8 text-center">History of the Chouchous</h1>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-white/30"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {events.map((event, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>

                    {/* Event content */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                      <div className="text-pink-300 font-semibold mb-2">{event.date}</div>
                      <h3 className="text-white text-xl font-bold mb-2">{event.title}</h3>
                      {event.images && (
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {event.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="relative h-48 rounded-lg overflow-hidden">
                              <Image
                                src={image}
                                alt={`Memory ${imgIndex + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-white/80">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 