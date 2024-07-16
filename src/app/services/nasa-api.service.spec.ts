import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NasaApiService } from './nasa-api.service';

describe('NasaApiService', () => {
  let service: NasaApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NasaApiService]
    });
    service = TestBed.inject(NasaApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes en HttpTestingController
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica que el servicio se haya creado correctamente
  });

  it('should retrieve recent images from the NASA API', () => {
    const mockImages = [
      { title: 'Image 1', url: 'http://example.com/image1.jpg' },
      { title: 'Image 2', url: 'http://example.com/image2.jpg' }
    ];

    // Suscribe a la función getRecentImages y verifica que las imágenes devueltas coincidan con mockImages
    service.getRecentImages().subscribe(images => {
      expect(images.length).toBe(2);
      expect(images).toEqual(mockImages);
    });

    // Verifica que se realiza una solicitud GET a la URL que contiene 'apod'
    const req = httpMock.expectOne(request => request.method === 'GET' && request.url.includes('apod'));
    expect(req.request.method).toBe('GET'); // Verifica que el método de solicitud sea GET

    // Simula la respuesta con mockImages
    req.flush(mockImages);
  });
});
