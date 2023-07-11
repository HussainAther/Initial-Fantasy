// Location interface
interface Location {
  name: string;
  description: string;
}

// Map class
export class Map {
  private locations: Location[] = [];

  // Add a new location to the map
  addLocation(name: string, description: string) {
    const location: Location = { name, description };
    this.locations.push(location);
  }

  // Display the current location
  viewCurrentLocation(currentLocation: Location) {
    console.log(`Current Location: ${currentLocation.name}`);
    console.log(`Description: ${currentLocation.description}`);
  }

  // Display the possible destinations
  viewPossibleDestinations(currentLocation: Location) {
    console.log("Possible Destinations:");
    for (const location of this.locations) {
      if (location !== currentLocation) {
        console.log(`- ${location.name}`);
      }
    }
  }
}

// Create an instance of the Map
const map = new Map();

// Add locations to the map
map.addLocation("Village", "A peaceful village with friendly inhabitants.");
map.addLocation("Forest", "A dense forest filled with mysterious creatures.");
map.addLocation("Mountain", "A towering mountain with treacherous paths.");

// Set the initial current location
const currentLocation = map.locations[0];

// Display current location and possible destinations
map.viewCurrentLocation(currentLocation);
map.viewPossibleDestinations(currentLocation);

