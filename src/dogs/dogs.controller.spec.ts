import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dtos/create-dog.dto';


describe('DogsController', () => {
  let dogsController: DogsController;
  let dogsService: DogsService;

  beforeEach(() => {
    dogsService = new DogsService();
    dogsController = new DogsController(dogsService);
  });

  describe('findAll', () => {
    it('should return an array of dogs', async () => {
      const dogBucket = new CreateDogDto();
      const result = [dogBucket];
      jest.spyOn(dogsService, 'findAll').mockImplementation(() => result);

      expect(await dogsController.findAll()).toBe(result);
    });
  });
});