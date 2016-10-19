exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          first_name: 'Kelsey',
          last_name: 'Chapman',
          email:'kelsey@chapman.com',
          user_name:'kelseychapman',
          image:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwj7xqnKhuPPAhUF1oMKHb0MDM4QjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F76490893647321760%2F&psig=AFQjCNFEf14sCyO1W5-V5gzsauRa8kp7Lw&ust=1476835360938040',
          hashed_password:'kelseychapman'
        }),
        knex('users').insert({
          first_name: 'Jeff',
          last_name: 'Brines',
          email:'jeff@brines.com',
          user_name:'jeffbrines',
          image:'https://i.vimeocdn.com/portrait/14306639_600x600.webp',
          hashed_password:'jeffbrines'
        }),
        knex('users').insert({
          first_name: 'Tucker',
          last_name: 'Pup',
          email:'tucker@pup.com',
          user_name:'tuckerpup',
          image:'http://cliparts.co/cliparts/Acb/Kaq/AcbKaqddi.gif',
          hashed_password:'tuckerpup'
        })
      ]);
    });
};
