import { Component, OnInit } from '@angular/core';
import { PythonTopicsService } from '../../services/python-topics.services';

@Component({
  selector: 'app-object-oriented-programming',
  templateUrl: './object-oriented-programming.component.html',
  styleUrls: ['./object-oriented-programming.component.scss']
})
export class ObjectOrientedProgrammingComponent implements OnInit {
  topicData: any;

  constructor(private pythonTopicsService: PythonTopicsService) {}

  ngOnInit(): void {
    this.pythonTopicsService.getTopicData().subscribe(data => {
      this.topicData = data.objectOrientedProgramming;
    });
  }
}
