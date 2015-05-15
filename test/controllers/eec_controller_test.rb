require 'test_helper'

class EecControllerTest < ActionController::TestCase
  test "should get eec" do
    get :eec
    assert_response :success
  end

end
