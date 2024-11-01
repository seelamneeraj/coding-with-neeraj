import { Component, OnInit } from '@angular/core';
import { PythonTopicsService } from '../../services/python-topics.services';

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.scss']
})
export class DataTypesComponent implements OnInit {
  topicData: any;

  constructor(private pythonTopicsService: PythonTopicsService) {}

  ngOnInit(): void {
    this.pythonTopicsService.getTopicData().subscribe(data => {
      this.topicData = data.dataTypesInPython;
    });
  }
}
