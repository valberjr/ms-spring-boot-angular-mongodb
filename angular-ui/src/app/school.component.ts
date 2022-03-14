import { Course } from './course.component';

export interface School {
  id?: number;
  name?: string;
  establishmentYear?: number;
  availableCourses?: Course[];
  strength?: number;
}
