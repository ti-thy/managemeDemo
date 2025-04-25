import { EVENTS, USERS } from './mockData';

export const loginUser = async (username, email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = USERS.find(u => u.username === username && u.email === email);
      if (user) {
        resolve(user);
      } else {
        const newUser = {
          id: String(USERS.length + 1),
          username,
          email,
          linkedEmails: [email],
        };
        USERS.push(newUser);
        resolve(newUser);
      }
    }, 500);
  });
};

export const fetchEvents = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = USERS.find(u => u.id === userId);
      const userEvents = EVENTS.filter(event => user.linkedEmails.includes(event.email));
      resolve(userEvents);
    }, 1000);
  });
};

export const detectClashes = (events) => {
  const clashes = [];
  const sortedEvents = [...events].sort((a, b) => new Date(a.start) - new Date(b.start));

  for (let i = 0; i < sortedEvents.length - 1; i++) {
    for (let j = i + 1; j < sortedEvents.length; j++) {
      const event1 = sortedEvents[i];
      const event2 = sortedEvents[j];
      
      const start1 = new Date(event1.start);
      const end1 = new Date(event1.end);
      const start2 = new Date(event2.start);
      const end2 = new Date(event2.end);
      
      if (start1 < end2 && start2 < end1) {
        clashes.push([event1, event2]);
      }
    }
  }
  
  return clashes;
};
  
