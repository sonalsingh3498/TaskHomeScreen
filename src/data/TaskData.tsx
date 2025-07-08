import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image2.png'
import image4 from '../assets/image2.png'
import image5 from '../assets/image2.png'
import image6 from '../assets/image2.png'
import greenTick from '../assets/greentick.png';
import arrowIcon from '../assets/arrowIcon.png';
import blankIcon from '../assets/blankIcon.png';
import clockicon from '../assets/clockicon.png';
import flag from '../assets/flag.png'

const tasks =[
  {
    icon: image1,
    title: 'Schedule a meeting with Harshit Sir',
    time: '09:00 AM',
    timeColor: '#1D4ED8',
    tags: ['Habit', 'Must '],
    statusIcon: greenTick,
    flagIcon:flag
  },
  {
    icon: image2,
    title: '2.5 Hours Simran and Meditation',
    time: '09:00 AM',
    timeColor: '#800080',
    tags: ['Habit', 'Must '],
    statusIcon: blankIcon,
    flagIcon:flag
  },
  {
    icon: image3,
    title: 'Save 200 Rupees Daily',
    time: '12:00 PM',
    timeColor: '#FFD700',
    tags: ['Habit', 'Must '],
    statusIcon: clockicon,
        flagIcon:flag

  },
  {
    icon: image4,
    title: 'Walk 10k Step Daily',
    time: '07:00 AM',
    timeColor: '#228B22',
    tags: ['Habit', 'Important '],
    statusIcon: blankIcon,
    flagIcon:flag
  },
  {
    icon: image5,
    title: 'Buy Sunflower for Mumma',
    time: '11:00 AM',
    timeColor: '#FFA500',
    tags: ['Task', 'Important '],
    statusIcon: arrowIcon,
        flagIcon:flag

  },
  {
    icon: image6,
    title: 'Make Mandala and Colour Daily',
    time: '07:30 PM',
    timeColor: '#006D5B',
    tags: ['Task', 'Important'],
    statusIcon: blankIcon,
    flagIcon:flag
  }
];
export default tasks;
