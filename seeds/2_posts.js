exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          users_id: 1,
          post_title: 'Post Title Here - Post #1',
          content:'Puppy kitty ipsum dolor sit good dog polydactyl bird seed feeder kibble. Window tongue twine brush tongue kisses hamster scratch field Tigger throw window gimme five kitty finch window running fur tail. Lazy Dog dog house fluffy lick dragging wet nose kisses. Feathers food walk fluffy turtle field fluffy shake dog chew run slobber fleas stick. Paws roll over vaccine chow play toys Spike puppy foot fish. Whiskers bedding roll over park catch grooming slobbery Buddy litter pet gate.Play litter finch yawn barky litter box fish water teeth purr litter walk play walk. Fleas barky stripes slobber dog good boy stripes dog house Tigger heel fleas bedding vaccine turtle. Swimming slobber tooth canary nest cage vitamins chow canary bird seed sit. Mouse crate lick park Fido behavior bark Buddy ball turtle canary run fast Buddy head string aquarium wagging head. Stripes lazy dog tooth walk bark chow',
        }),
        knex('posts').insert({
          users_id: 2,
          post_title: 'Post Title Here - Post #2',
          content:'Stripes hamster string kibble feathers small animals. Rover yawn maine coon cat birds crate vaccination aquatic furry wag tail groom wag tail ferret sit.Cat parrot tail bedding lazy cat stripes fleas teeth stick maine coon cat dog pet teeth commands teeth Snowball treats food ferret. Teeth furry Tigger food kisses carrier Fido turtle feeder dog. Tooth toy nap slobber smooshy toys. Gimme Five behavior stay tabby warm polydactyl small animals parrot tail fur bird fluffy play dead Rover play dead aquatic. Bark treats warm wet nose smooshy biscuit cat smooshy tuxedo purr mouse warm scratch speak chow. Fido maine coon cat wagging pet gate maine coon cat dog house fluffy aquatic good boy. Twine barky ID tag tuxedo parakeet wag tail paws cage nest maine coon cat throw treats scratch bird food sit running commands litter ferret kitty. Scratcher yawn scratch Spike bird seed field bird food.Warm scratch leash Mittens bird seed kitty fluffy run fast bird seed left paw Spike crate Fido parakeet run. Pet Supplies stay dog house kibble fur bed commands window wagging feathers crate. Food lick litter head aquatic tail Spike good boy fleas pet gate catch feathers lazy cat pet supplies scratch lazy dog bird seed cockatiel pet supplies vitamins.',
        }),
        knex('posts').insert({
          users_id: 3,
          post_title: 'Post Title Here - Post #3',
          content:'Tabby dinnertime vaccine toy meow warm carrier aquarium. Bedding commands vitamins water dog pet supplies pet cockatiel bird food kitty sit feeder parakeet. Tabby bed finch feathers chew cage pet supplies litter box foot fur tongue parakeet. Kitten fetch grooming teeth good boy fetch paws bird food pet food pet food leash bedding finch fluffy head Snowball stick small animals barky. Tuxedo kibble vitamins feeder mouse slobbery commands wagging toys food small animals treats walk turtle.Play puppy tail tongue fleas litter box scratch stripes Tigger walk kitty scratcher ball slobber field dragging canary bed tail. Feathers birds gimme five litter box carrier birds bird litter. Snowball Tigger vaccination string throw roll over bed harness catch head meow groom treats grooming cat kibble turtle chow feathers Rover. Pet Supplies cat aquatic bedding Buddy bird tongue litter tail dragging pet food toy. Pet Food fish small animals lol catz dragging wagging food litter box. Wagging chew water roll over ball bedding speak crate walk run fast window Rover paws.',
        })
      ]);
    });
};
