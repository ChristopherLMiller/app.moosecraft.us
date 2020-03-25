export const server_ranks = [
{
  name: "players",
  description: "The common player on the server.  The bountiful player rank.",
  ranks: [
  {
    name: "Pauper",
    perms_rank: "default",
    previous_rank: null,
    next_rank: "Land Owner",
    description: "The default rank given to players when they join this server.  Not much can be done at this level but tour and explore the world without care of dieing.  Players can self promote from this rank when they choose to."
  }, {
    name: "Land Owner",
    perms_name: "builder",
    previous_rank: "Pauper",
    next_rank: "Merchanct",
    description: "Once going through the application over on the join page players gain this rank.  They are unleashed to the world to do as they please, following the rules of course.  This rank allows players to level up their abilities, which are still locked but will make them powerful players once reaching the next rank.  Basic things like land management are included here so that players may protect their creations."
  }, {
    name: "Merchant",
    perms_rank: "advbuilder",
    previous_rank: "Land Owner",
    next_rank: "Senior Merchant",
    description: "Reaching the rank of Merchant means that the player has shown considerable amounts of maturity on the server, as well as time spent and building as well.  This rank is earned automatically for meeting certain criteria and opens up many new things to do."
  }, {
    name: "Senior Merchant",
    perms_rank: "masterbuilder",
    previous_rank: "Merchant",
    next_rank: null,
    description: "The highest level a player can achieve, the Senior Merchant.  Achieving this rank means the player has show a very advanced level of play on Minecraft, the only way to achieve this rank is a manual promotion by one of the staff members."
  }]
}, {
  name: "Staff",
  description: "The people who keep this server running daily",
  ranks: [
    {
      name: "Baron",
      perms_rank: "mod",
      previous_rank: null,
      next_rank: "Magister",
      description: "The lowest of our staff ranks is the Baron.  They play the same as a normal Land Owner would but have been promoted to this rank to help keep peace on the server.  Their abilities are still limited to what they can do, many higher consequence things are left to more senior staff.",
    }, {
      name: "Magister",
      perms_rank: "admin",
      previous_rank: "Baron",
      next_rank: "Warlord Veteran",
      description: "Much Like Baron in the previous rank the Magister is allotted more abilities, being equivelant to a Merchant player but with more administration tools than a Baron.  This person can use more tools to find hackers and ban as appropriate.",
    }, {
      name: "Warlord Veteran",
      perms_rank: "superadmin",
      previous_rank: "Magister",
      next_rank: "Overlord",
      description: "The Warlord Veteran is reserved for basically server administrators who need the ability to just about anything on the server that need be.  These guys know what they are doing and have earned their spot for a reason.",
    }, {
      name: "Overlord",
      perms_rank: "owner",
      previous_rank: "Warlord Veteran",
      next_rank: null,
      description: "Only one person on the server has this rank, moose517, the owner of this server.  If you see him don't be afraid to say hi but don't mess up either or you'll be history!"
    }
  ]
}]