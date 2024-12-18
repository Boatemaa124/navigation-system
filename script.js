// Initialize the Google Maps API
let map;

function initMap() {
  // Create a map centered around the school location
  map = new google.maps.Map(document.getElementById("mapContainer"), {
    zoom: 18,
    // Replace with school's coordinates
    center: { lat: 5.5963907479085995, lng: -0.2234754906965684 },
  });

  // Add markers for different school locations
  const locations = [
    {
      name: "Bush canteen",
      lat: 5.595289065006842,
      lng: -0.22367772214186085,
    },
    {
      name: "FoCIS",
      lat: 5.595815609722268,
      lng: -0.22406597189669542,
    },
    {
      name: "Hostel Block A",
      lat: 5.595774832577084,
      lng: -0.22363047928323193,
    },
    {
      name: "Hostel Block C",
      lat: 5.595559659181298,
      lng: -0.22292750160539315,
    },
    {
      name: "Ourday",
      lat: 5.595825914698635,
      lng: -0.22292109140930985,
    },
    {
      name: "Faculty Of Engineering",
      lat: 5.596092295886189,
      lng: -0.22307402630363427,
    },
    {
      name: "Administration Block",
      lat: 5.596654333179651,
      lng: -0.2233198065911086,
    },
    {
      name: "Forecourt",
      lat: 5.595909444752052,
      lng: -0.22351988861889266,
    },
    {
      name: "Cafeteria",
      lat: 5.596004238554854,
      lng: -0.22372004688890496,
    },
    {
      name: "Graduate Block",
      lat: 5.595906370033775,
      lng: -0.22274723651537165,
    },
    {
      name: "Block B",
      lat: 5.596535574232708,
      lng: -0.22371552669857828,
    },
    {
      name: "Block C",
      lat: 5.595547886634229,
      lng: -0.22390059912020144,
    },
    {
      name: "Entrance",
      lat: 5.596594301552499,
      lng: -0.22287331309721894,
    },
    {
      name: "School Field",
      lat: 5.594992645297423,
      lng: -0.22340975487300335,
    },
    {
      name: "Clinic",
      lat: 5.596092449734999,
      lng: -0.22414468012478622,
    },
    {
      name: "Car park",
      lat: 5.596952671544661,
      lng: -0.2238845058740048,
    },
    {
      name: "Library",
      lat: 5.5965899122882385,
      lng: -0.22348351230810462,
    },
  ];

  // Create markers for each location
  locations.forEach((location) => {
    new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.name,
    });
  });
}

// Function to show directions between locations (for demonstration)
function getDirections() {
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;

  const directions = {
    Entrance: {
      Administration:
        "Head southwest on GCTU-SRC Office road, take the first right, then left, destination will be on the right.",
      GBlock:
        "Head southwest on GCTU-SRC Office road, take the first left, destination is straight ahead on your right.",
      car: "Head southwest on GCTU-SRC Office road, take the first right, then second left, then turn right, destination will be on the left.",
      Forecourt: "Head southwest on GCTU-SRC Office road, then take a left.",
      Clinic:
        "Head southwest on GCTU-SRC Office road, then take a right, head straight, destination will be on the left.",
      FoCIS:
        "Head southwest on GCTU-SRC Office road, then take a right, head straight, destination will be straight ahead.",
      engineering:
        "Head southwest on GCTU-SRC Office road, take the first left, destination is straight ahead.",
      Cafeteria:
        "Head southwest on GCTU-SRC Office road, then take a left, destination will be on the right.",
      Ourday:
        "Head southwest on GCTU-SRC Office road, take the first left, destination is straight ahead on your right.",
      library:
        "Head southwest on GCTU-SRC Office road, take the first right, then left, destination will be on the right.",
      BLOCKB:
        "Head southwest on GCTU-SRC Office road, take the second right, destination will be on the right adjacent Administration Block.",
      BLOCKC:
        "Head southwest on GCTU-SRC Office road, turn right, head straight, turn left, destination will be on the right.",
      SchoolField:
        "Head southwest on GCTU-SRC Office road, turn right, head straight, turn left, destination will be on the right.",
      bushcanteen:
        "Head southwest on GCTU-SRC Office road, turn right, head straight, turn left, head straight alittle just after BLOCK C, destination will be on the right.",
      hostelA:
        "Head southwest on GCTU-SRC Office road, then take a left, destination will be straight ahead.",
      hostelB:
        "Head southwest on GCTU-SRC Office road, then take a left, destination will be straight ahead adjacent HOSTEL BLOCK A.",
      hostelC:
        "Head southwest on GCTU-SRC Office road, then take a left, destination will be straight ahead opposite HOSTEL BLOCK B.",
    },

    Administration: {
      Entrance:
        "Head northeast, turn right toward GCTU SRC Office road, turn left onto GCTU SRC Office road,destination will be on the right.",
      GBlock:
        "Head southwest towards GCTU SRC Office road, turn left, turn left again, destination will be straight ahead adjacent Ourday.",
      car: "Head straight, turn left, destination will be on the left",
      Forecourt:
        "Head southwest towards GCTU SRC Office road,  then take a left.",
      Clinic:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, destination will be on the right.",
      FoCIS:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, destination will be straight ahead.",
      engineering: "Opposite Administration Block",
      Cafeteria:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be right.",
      Ourday:
        "Head southwest towards GCTU SRC Office road, turn left, turn left again, destination will be straight ahead.",
      library: "On the same block",
      BLOCKB: "Just adjacent the Administration Block.",
      BLOCKC:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, turn left, destination will be on the right.",
      SchoolField:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, turn left, head straight, destination will be on the right adjacent Bush Canteen.",
      bushcanteen:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, turn left, head straight alittle, destination will be on the right adjacent BLOCK C.",
      hostelA:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be straight ahead.",
      hostelB:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be adjacent BLOCK A.",
      hostelC:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be opposite BLOCK B.",
    },

    GBlock: {
      Entrance: "Head straight through Faculty of Engineering, turn right.",
      Administration:
        "Head straight through Faculty of Engineering, destination is straight ahead.",
      car: "Head straight through Faculty of Engineering, turn a right, then first left, head straight, turn left, destination is on the left.",
      Forecourt:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a left.",
      Clinic:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, destination is on the right.",
      FoCIS:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, destination is straight ahead.",
      engineering: "Opposite Graduate Block.",
      Cafeteria:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a left, destination will be on the right.",
      Ourday: "Adjacent Graduate Block.",
      library:
        "Head straight through Faculty of Engineering, destination is straight ahead on the Administration Block.",
      BLOCKB:
        "Head straight through Faculty of Engineering, destination is adjacent Administration Block.",
      BLOCKC:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, take a left, destination will be on the right.",
      SchoolField:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, take a left, keep headed straight, destination will be on the right.",
      bushcanteen:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, take a left, keep headed straight, destination is adjacent BLOCK C.",
      hostelA:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a left, destination will be straight ahead.",
      hostelB:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a left, destination will be adjacent Hostel Block A.",
      hostelC: "Opposite Ourday",
    },

    car: {
      Entrance:
        "Head straight, take the second left, head straight, destination is on the left.",
      Administration:
        "Head straight, take the first left, destination will straight ahead.",
      GBlock:
        "Head straight, take the second left, head straight, turn right on GCTU SRC road, take the first left, head straight through Faculty of Engineering, destination will be on the left.",
      Forecourt:
        "Head straight, take the second left, head straight, turn right on GCTU SRC road, destination will be on the left.",
      Clinic:
        "Use the road behind BLOCK B, then take a right, destination will be on the right.",
      FoCIS:
        "Use the road behind BLOCK B, then take a right, destination will be straight ahead.",
      engineering:
        "Head straight, take the second left, head straight, turn right on GCTU SRC road, take the first left, destination will be straight ahead.",
      Cafeteria:
        "Head straight, take the second left, head straight, turn right on GCTU SRC road, destination will be on the right.",
      Ourday:
        "Head straight, take the second left, head straight, turn right on GCTU SRC road, take the first left, head straight through Faculty of Engineering, destination will be on the right.",
      library:
        "Head straight, take the first left, destination will straight ahead.",
      BLOCKB: "Adjacent the Car Park.",
      BLOCKC:
        "Use the road behind BLOCK B, then take a right, head straight, turn left, destination will be on the right.",
      SchoolField:
        "Use the road behind BLOCK B, then take a right, head straight, turn left, ",
      bushcanteen:
        "Use the road behind BLOCK B, then take a right, head straight, turn left, destination will be on the right next to BLOCK C.",
      hostelA:
        "Head straight, take the second left, head straight, turn right on GCTU SRC road, take a left, destination will be straight ahead.",
      hostelB:
        "Head straight, take the second left, head straight, turn right on GCTU SRC road, take a left, destination will be adjacent Hostel Block A.",
      hostelC:
        "Head straight, take the second left, head straight, turn right on GCTU SRC road, take a left, destination will be opposite Hostel Block B.",
    },

    Forecourt: {
      Entrance: "Take a right on the GCTU SRC road, head straight.",
      Administration:
        "Take a right on the GCTU SRC road, take a left, destination will be on the right.",
      GBlock:
        "Take a right on the GCTU SRC road, take a left, head straight through Faculty of Engineering, desination is straight ahead.",
      car: "Take a right on the GCTU SRC road, take a left, head straight, turn left, turn right, destination will be on the left.",
      Clinic:
        "Take a left on the GCTU SRC road, head straight, destination will be on the right.",
      FoCIS:
        "Take a left on the GCTU SRC road, head straight, destination will be straight ahead.",
      engineering:
        "Take a right on the GCTU SRC road, take a left, destination will be straight ahead.",
      Cafeteria: "Just adjacent Forecourt",
      Ourday:
        "Take a right on the GCTU SRC road, take a left, head straight through Faculty of Engineering, desination is straight ahead adjacent Graduate Block.",
      library:
        "Take a right on the GCTU SRC road, take a left, destination will be on the right.",
      BLOCKB: "Take a right on the GCTU SRC road, first building on the left.",
      BLOCKC:
        "Take a left on the GCTU SRC road, head straight, take a left, destination will be on the right.",
      SchoolField:
        "Take a left on the GCTU SRC road, head straight, take a left, head straight, destination will be on the right adjacent Bush Canteen.",
      bushcanteen:
        "Take a left on the GCTU SRC road, head straight, take a left, destination will be on the right adjacent BLOCK C.",
      hostelA: "Just facing Forecourt.",
      hostelB: "Just adjacent Hostel Block A.",
      hostelC: "Opposite Hostel Block B.",
    },

    Clinic: {
      Entrance:
        "Take a left, head straight on the GCTU SRC road, take right, then a left, continue straight ahead.",
      Administration:
        "Take a left, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left.",
      GBlock:
        "Take a left, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn right through Faculty of Engineering, deestination is straight ahead.",
      car: "Take a left, head straight on the GCTU SRC road, take left, continue straight ahead, destination is on the right.",
      Forecourt:
        "Take a left, head straight on the GCTU SRC road, take right, destination is on the right.",
      FoCIS: "Look straight ahead, destination is on the right.",
      engineering:
        "Take a left, head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right.",
      Cafeteria:
        "Take a left, head straight on the GCTU SRC road, take right, destination is on the right.",
      Ourday:
        "Take a left, head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right through Faculty of Engineering, destination is on the right.",
      library:
        "Take a left, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left",
      BLOCKB:
        "Take a left, head straight on the GCTU SRC road, take right, then a left, first building on the left.",
      BLOCKC:
        "Look straight ahead, destination is on the right  next to FoCIS.",
      SchoolField:
        "Head straight, destination is on the right close to Bush Canteen.",
      bushcanteen:
        "Head straight, destination is on the right next to BLOCK C.",
      hostelA:
        "Take a left, head straight on the GCTU SRC road, take right, destination is on the right opposite Forecourt.",
      hostelB: "Head straight, take left, destination is on the right.",
      hostelC:
        "Head straight, take left, destination is opposite Hostel Block B.",
    },

    FoCIS: {
      Entrance:
        "Head straight on the GCTU SRC road, take right, then a left, continue straight ahead.",
      Administration:
        "Head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left.",
      GBlock:
        "Head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn right through Faculty of Engineering, deestination is straight ahead.",
      car: "Head straight on the GCTU SRC road, take left, continue straight ahead, destination is on the right.",
      Forecourt:
        "Head straight on the GCTU SRC road, take right, destination is on the right.",
      Clinic: "Head left, turn right, destination will be on your right.",
      engineering:
        "Head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right.",
      Cafeteria:
        "Head straight on the GCTU SRC road, take right, destination is on the right.",
      Ourday:
        "Head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right through Faculty of Engineering, destination is on the right.",
      library:
        "Head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left.",
      BLOCKB:
        "Head straight on the GCTU SRC road, take right, then a left, first building on the left.",
      BLOCKC: "Take a right, destination will be on the right next to FoCIS.",
      SchoolField:
        "Take a right, head straight ahead, destination well be on the right next to Bush Canteen.",
      bushcanteen:
        "Take a right, head straight ahead, destination well be on the right.",
      hostelA:
        "Head straight on the GCTU SRC road, take right, destination is on the right opposite Forecourt.",
      hostelB:
        "Take a right, head straight, turn left, destination is on the right.",
      hostelC:
        "Take a right, head straight, turn left, then take a right, destination is on the right.",
    },

    engineering: {
      Entrance: "Head straight, turn right, destination will be on the right.",
      Administration: "Head straight, destination is straight ahead.",
      GBlock: "Opposite Faculty of Engineering.",
      car: "Head straight, turn a right, then first left, head straight, turn left, destination is on the left.",
      Forecourt:
        "Head straight, turn left on the GCTU SRC Office road,  then take a left.",
      Clinic:
        "Head straight, turn left on the GCTU SRC Office road,  then take a right, head straight, destination is on the right.",
      FoCIS:
        "Head straight, turn left on the GCTU SRC Office road,  then take a right, head straight, destination is straight ahead.",
      Cafeteria:
        "Head straight, turn left on the GCTU SRC Office road,  then take a left, destination will be on the right.",
      Ourday: "Adjacent Graduate Block.",
      library:
        "Head straight, destination is straight ahead on the Administration Block.",
      BLOCKB: "Head straight, destination is adjacent Administration Block.",
      BLOCKC:
        "Head straight, turn left on the GCTU SRC Office road,  then take a right, head straight, take a left, destination will be on the right.",
      SchoolField:
        "Head straight, turn left on the GCTU SRC Office road,  then take a right, head straight, take a left, keep headed straight, destination will be on the right.",
      bushcanteen:
        "Head straight, turn left on the GCTU SRC Office road,  then take a right, head straight, take a left, keep headed straight, destination is adjacent BLOCK C",
      hostelA:
        "Head straight, turn left on the GCTU SRC Office road,  then take a left, destination will be straight ahead.",
      hostelB:
        "Head straight, turn left on the GCTU SRC Office road,  then take a left, destination will be adjacent Hostel Block A.",
      hostelC: "Adjacent Ourday",
    },

    Cafeteria: {
      Entrance: "Take a right on the GCTU SRC road, head straight.",
      Administration:
        "Take a right on the GCTU SRC road, take a left, destination will be on the right.",
      GBlock:
        "Take a right on the GCTU SRC road, take a left, head straight through Faculty of Engineering, desination is straight ahead.",
      car: "Take a right on the GCTU SRC road, take a left, head straight, turn left, turn right, destination will be on the left.",
      Forecourt: "Just facing Cafeteria.",
      Clinic:
        "Take a left on the GCTU SRC road, head straight, destination will be on the right.",
      FoCIS:
        "Take a left on the GCTU SRC road, head straight, destination will be straight ahead.",
      engineering:
        "Take a right on the GCTU SRC road, take a left, destination will be straight ahead.",
      Ourday:
        "Take a right on the GCTU SRC road, take a left, head straight through Faculty of Engineering, desination is straight ahead adjacent Graduate Block.",
      library:
        "Take a right on the GCTU SRC road, take a left, destination will be on the right.",
      BLOCKB: "Take a right on the GCTU SRC road, first building on the left.",
      BLOCKC:
        "Take a left on the GCTU SRC road, head straight, take a left, destination will be on the right.",
      SchoolField:
        "Take a left on the GCTU SRC road, head straight, take a left, head straight, destination will be on the right adjacent Bush Canteen.",
      bushcanteen:
        "Take a left on the GCTU SRC road, head straight, take a left, destination will be on the right adjacent BLOCK C.",
      hostelA: "Just facing Forecourt.",
      hostelB: "Just adjacent Hostel Block A.",
      hostelC: "Just opposite Hostel Block B.",
    },

    Ourday: {
      Entrance: "Head straight through Faculty of Engineering, turn right.",
      Administration:
        "Head straight through Faculty of Engineering, destination is straight ahead.",
      GBlock: "Adjacent Ourday.",
      car: "Head straight through Faculty of Engineering, turn a right, then first left, head straight, turn left, destination is on the left.",
      Forecourt:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a left.",
      Clinic:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, destination is on the right.",
      FoCIS:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, destination is straight ahead.",
      engineering: "Opposite Graduate Block.",
      Cafeteria:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a left, destination will be on the right.",
      library:
        "Head straight through Faculty of Engineering, destination is straight ahead on the Administration Block.",
      BLOCKB:
        "Head straight through Faculty of Engineering, destination is adjacent Administration Block.",
      BLOCKC:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, take a left, destination will be on the right.",
      SchoolField:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, take a left, keep headed straight, destination will be on the right.",
      bushcanteen:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a right, head straight, take a left, keep headed straight, destination is adjacent BLOCK C.",
      hostelA:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a left, destination will be straight ahead.",
      hostelB:
        "Head straight through Faculty of Engineering, turn left on the GCTU SRC Office road,  then take a left, destination will be adjacent Hostel Block A.",
      hostelC: "opposite Ourday.",
    },

    library: {
      Entrance:
        "Head northeast, turn right toward GCTU SRC Office road, turn left onto GCTU SRC Office road,destination will be on the right.",
      Administration: "On the same block",
      GBlock:
        "Head southwest towards GCTU SRC Office road, turn left, turn left again, destination will be straight ahead adjacent Ourday.",
      car: "Head straight, turn left, destination will be on the left",
      Forecourt:
        "Head southwest towards GCTU SRC Office road,  then take a left.",
      Clinic:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, destination will be on the right.",
      FoCIS:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, destination will be straight ahead.",
      engineering: "Opposite Administration Block",
      Cafeteria:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be right.",
      Ourday:
        "Head southwest towards GCTU SRC Office road, turn left, turn left again, destination will be straight ahead.",
      BLOCKB: "Just adjacent the Administration Block.",
      BLOCKC:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, turn left, destination will be on the right.",
      SchoolField:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, turn left, head straight, destination will be on the right adjacent Bush Canteen.",
      bushcanteen:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, turn left, head straight alittle, destination will be on the right adjacent BLOCK C.",
      hostelA:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be straight ahead.",
      hostelB:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be adjacent BLOCK A.",
      hostelC:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be adjacent BLOCK B.",
    },

    BLOCKB: {
      Entrance:
        "Head northeast, turn right toward GCTU SRC Office road, turn left onto GCTU SRC Office road,destination will be on the right.",
      Administration: "Adjacent BLOCK B",
      GBlock:
        "Head southwest towards GCTU SRC Office road, turn left, head straight through Faculty of Engineering, destination will be on the left.",
      car: "Just adjacent BLOCK B.",
      Forecourt:
        "Head southwest towards GCTU SRC Office road,  then take a left.",
      Clinic:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, destination will be on the right.",
      FoCIS:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, destination will be straight ahead.",
      engineering: "Opposite Administration Block",
      Cafeteria:
        "Head southwest towards GCTU SRC Office road,  then take a left, destination with be on the right.",
      Ourday:
        "Head southwest towards GCTU SRC Office road, turn left, head straight through Faculty of Engineering, destination will be on the right.",
      library: "Adjacent BLOCK B",
      BLOCKC:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, turn left, destination will be on the right.",
      SchoolField:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, turn left, head straight alittle, destination will be on the right adjacent Bush Canteen.",
      bushcanteen:
        "Head southwest towards GCTU SRC Office road, turn right onto GCTU SRC Office road, head straight, turn left, head straight alittle, destination will be on the right adjacent BLOCK C.",
      hostelA:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be straight ahead.",
      hostelB:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be adjacent BLOCK A.",
      hostelC:
        "Head southwest towards GCTU SRC Office road, turn left, destination will be opposite BLOCK B.",
    },

    BLOCKC: {
      Entrance:
        "Head northwest, take a right on the GCTU SRC road, take right, then a left, continue straight ahead.",
      Administration:
        "Take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left.",
      GBlock:
        "Take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn right through Faculty of Engineering, deestination is straight ahead.",
      car: "Take a right, head straight on the GCTU SRC road, take left, continue straight ahead, destination is on the right.",
      Forecourt:
        "Take a right, head straight on the GCTU SRC road, take right, destination is on the right.",
      Clinic: "Head straight, destination will be on the right.",
      FoCIS: "Adjacent BLOCK C,building next to it on the left.",
      engineering:
        "Take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right.",
      Cafeteria:
        "Take a right, head straight on the GCTU SRC road, take right, destination is on the right.",
      Ourday:
        "Take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right through Faculty of Engineering, destination is on the right.",
      library:
        "Take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left.",
      BLOCKB:
        "Take a right, head straight on the GCTU SRC road, take right, then a left, first building on the left.",
      SchoolField:
        "Take a right, head straight ahead, destination well be on the right next to Bush Canteen.",
      bushcanteen: "Adjacent BLOCK C,building next to it on the right.",
      hostelA: "Opposite Hostel Block A",
      hostelB:
        "Take a right, head straight, turn left, destination is on the right.",
      hostelC:
        "Take a right, head straight, turn left, then take a right, destination is on the right.",
    },

    SchoolField: {
      Entrance:
        "Head northwest, take a right on the GCTU SRC road, take right, then a left, continue straight ahead.",
      Administration:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left.",
      GBlock:
        "Head northwest,take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn right through Faculty of Engineering, deestination is straight ahead.",
      car: "Head northwest, take a right, head straight on the GCTU SRC road, take left, continue straight ahead, destination is on the right.",
      Forecourt:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, destination is on the right.",
      Clinic: "Head northwest, destination will be on the right.",
      FoCIS: "Head northwest, on the junction destination is on the left.",
      engineering:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right.",
      Cafeteria:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, destination is on the right.",
      Ourday:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right through Faculty of Engineering, destination is on the right.",
      library:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left.",
      BLOCKB:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, first building on the left.",
      BLOCKC: "Head northwest, building next to Bush Canteen on the left",
      bushcanteen: "Adjacent Bush Canteen, building next to it on the left.",
      hostelA:
        "Head northwest, take the first right, destination is on the left.",
      hostelB:
        "Head northwest, take the first right, destination is on the right.",
      hostelC: "",
    },

    bushcanteen: {
      Entrance:
        "Head northwest, take a right on the GCTU SRC road, take right, then a left, continue straight ahead.",
      Administration:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left.",
      GBlock:
        "Head northwest,take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn right through Faculty of Engineering, deestination is straight ahead.",
      car: "Head northwest, take a right, head straight on the GCTU SRC road, take left, continue straight ahead, destination is on the right.",
      Forecourt:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, destination is on the right.",
      Clinic: "Head northwest, destination will be on the right.",
      FoCIS: "Head northwest, on the junction destination is on the left.",
      engineering:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right.",
      Cafeteria:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, destination is on the right.",
      Ourday:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead,take a right through Faculty of Engineering, destination is on the right.",
      library:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, continue straight ahead and turn left.",
      BLOCKB:
        "Head northwest, take a right, head straight on the GCTU SRC road, take right, then a left, first building on the left.",
      BLOCKC: "Head northwest, building next to Bush Canteen on the left",
      SchoolField: "Adjacent School Field, building next to it on the right.",
      hostelA: "Head straight, destination is on the left.",
      hostelB: "Head straight, destination is on the right",
      hostelC: "",
    },

    hostelA: {
      Entrance: "Take a right on the GCTU SRC road, head straight.",
      Administration:
        "Take a right on the GCTU SRC road, take a left, destination will be on the right.",
      GBlock:
        "Take a right on the GCTU SRC road, take a left, head straight through Faculty of Engineering, desination is straight ahead.",
      car: "Take a left on the GCTU SRC road, take a left, head straight, turn left, turn right, destination will be on the left.",
      Forecourt: "Just facing Forecourt.",
      Clinic:
        "Take a left on the GCTU SRC road, head straight, destination will be on the right.",
      FoCIS:
        "Take a left on the GCTU SRC road, head straight, destination will be straight ahead.",
      engineering:
        "Take a right on the GCTU SRC road, take a left, destination will be straight ahead.",
      Cafeteria: "Just adjacent Forecourt",
      Ourday:
        "Take a right on the GCTU SRC road, take a left, head straight through Faculty of Engineering, desination is straight ahead adjacent Graduate Block.",
      library:
        "Take a right on the GCTU SRC road, take a left, destination will be on the right.",
      BLOCKB: "Take a right on the GCTU SRC road, first building on the left.",
      BLOCKC:
        "Take a left on the GCTU SRC road, head straight, take a left, destination will be on the right.",
      SchoolField:
        "Take a left on the GCTU SRC road, head straight, take a left, head straight, destination will be on the right adjacent Bush Canteen.",
      bushcanteen:
        "Take a left on the GCTU SRC road, head straight, take a left, destination will be on the right adjacent BLOCK C.",
      hostelB: "Just adjacent Hostel Block A.",
      hostelC: "Opposite Hostel Block B.",
    },

    hostelB: {
      Entrance:
        "Head toward Forecourt, take a right on the GCTU SRC road, head straight.",
      Administration:
        "Head toward Forecourt, take a right on the GCTU SRC road, then take a left.",
      GBlock: "Head straight down the pavement, Graduate Block is up ahead.",
      car: "Head toward Forecourt, take a left on the GCTU SRC road, take a left, head straight, turn left, turn right, destination will be on the left.",
      Forecourt: "Just facing Hostel Block A.",
      Clinic:
        "Head toward Forecourt, take a left on the GCTU SRC road, head straight, destination will be on the right.",
      FoCIS:
        "Head toward Forecourt, take a left on the GCTU SRC road, head straight, destination will be straight ahead.",
      engineering:
        "Head toward Forecourt, take a right on the GCTU SRC road, take a left, destination will be straight ahead.",
      Cafeteria:
        "Head toward Forecourt, destination is just adjacent Forecourt",
      Ourday: "Head straight down the pavement, take the second right.",
      library:
        "Head toward Forecourt, take a right on the GCTU SRC road, then take a left, on the same Block as the Administration..",
      BLOCKB:
        "Head toward Forecourt, take a right on the GCTU SRC road, first building on the left.",
      BLOCKC: "Just behind Hostel Block B",
      SchoolField: "Just behind Hostel Block B",
      bushcanteen: "Just behind Hostel Block B",
      hostelA: "Adjacent Hostel Block B.",
      hostelC: "Opposite Hostel Block B.",
    },

    hostelC: {
      Entrance:
        "Head toward Forecourt, take a right on the GCTU SRC road, head straight.",
      Administration:
        "Head toward Forecourt, take a right on the GCTU SRC road, then take a left.",
      GBlock: "Use pavement leading to Ourday, destination is on the right.",
      car: "Head toward Forecourt, take a left on the GCTU SRC road, head straight, destination is on the right.",
      Forecourt: "head left, take the stairs, destination is up ahead.",
      Clinic:
        "Head toward Forecourt, take a left on the GCTU SRC road, destination is on the right",
      FoCIS:
        "Head toward Forecourt, take a left on the GCTU SRC road, destination is straight ahead.",
      engineering:
        "Use pavement leading to Ourday, destination is on the right.",
      Cafeteria: "Head toward Forecourt, destination is adjacent Forecourt.",
      Ourday: "Opposite Hostel Block C.",
      library:
        "Head toward Forecourt, take a right on the GCTU SRC road, then take a left.",
      BLOCKB:
        "Head toward Forecourt, take a right on the GCTU SRC road, destination is the first building on the left.",
      BLOCKC: "Head southwest on the pavement, BLOCK C is on the right.",
      SchoolField:
        "Head southwest on the pavement, School Field is on the left.",
      bushcanteen:
        "Head southwest on the pavement, Bush Canteen is straight ahead.",
      hostelA: "Just adjacent Hostel Block B.",
      hostelB: "Opposite Hostel Block C.",
    },
  };

  const result = directions[start]
    ? directions[start][end]
    : "Directions not available";
  document.getElementById("directionsResult").innerText = result;
}
