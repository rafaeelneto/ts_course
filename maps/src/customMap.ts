import "googlemaps";

export interface GisFeature {
  location: {
    lat: number;
    lng: number;
  };
  content(): string;
}

export class CustomMap {
  // this variable is private to limit the access to others to the functions
  // and prevent errors
  private customMap: google.maps.Map;

  constructor(divId: string) {
    this.customMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(gisFeature: GisFeature): void {
    const marker = new google.maps.Marker({
      map: this.customMap,
      position: gisFeature.location,
    });
  }
}
