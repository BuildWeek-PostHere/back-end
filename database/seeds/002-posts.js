exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          user_id:1,
          title:'StarCraft 2',
          best_place:'NA',
          post_body: 'In the distant future, in the darkest reaches of space, the ghosts of the past whisper your name. You are Jim Raynor!',
        },
        {
          id: 2,
          user_id:2,
          title:'The Grand Armada',
          best_place:'NA',
          post_body: 'The Spanish Armada was a Habsburg Spanish fleet of 130 ships that sailed from Corunna in late May 1588.',
        },
        {
          id: 3,
          user_id:3,
          title:'Vive la France',
          best_place:'NA',
          post_body: 'A historical phrase that dates to the storming of the Bastille.',
        },
        {
          id: 4,
          user_id:3,
          title:'My life for Aiur',
          best_place:'NA',
          post_body: 'What the zealots in star craft shout while charging into battle.',
        },
        {
          id: 5,
          user_id:5,
          title:'I love pancakes',
          best_place:'NA',
          post_body: 'I dont know how to make them, working on it!',
        }
      ]);
    });
};